import type { MouseEventData, MouseEventType, MouseSGREventData } from '@app/Types.ts'

/**
 * ANSI mouse tracking utilities.
 * @description Mouse tracking and event handling methods.
 */
export class Mouse {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Disables all mouse tracking modes.
   * @returns Promise that resolves when all tracking is disabled
   */
  static async disableAllTracking(): Promise<void> {
    await this.disableTracking()
    await this.disableDragTracking()
    await this.disableMoveTracking()
  }

  /**
   * Disables mouse drag tracking.
   * @returns Promise that resolves when drag tracking is disabled
   */
  static async disableDragTracking(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1002l`))
  }

  /**
   * Disables mouse move tracking.
   * @returns Promise that resolves when move tracking is disabled
   */
  static async disableMoveTracking(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1003l`))
  }

  /**
   * Disables SGR mouse mode.
   * @returns Promise that resolves when SGR mode is disabled
   */
  static async disableSGRMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1006l`))
  }

  /**
   * Disables basic mouse tracking.
   * @returns Promise that resolves when tracking is disabled
   */
  static async disableTracking(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1000l`))
  }

  /**
   * Enables all mouse tracking modes.
   * @returns Promise that resolves when all tracking is enabled
   */
  static async enableAllTracking(): Promise<void> {
    await this.enableTracking()
    await this.enableDragTracking()
    await this.enableMoveTracking()
  }

  /**
   * Enables mouse drag tracking.
   * @returns Promise that resolves when drag tracking is enabled
   */
  static async enableDragTracking(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1002h`))
  }

  /**
   * Enables mouse move tracking.
   * @returns Promise that resolves when move tracking is enabled
   */
  static async enableMoveTracking(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1003h`))
  }

  /**
   * Enables SGR drag tracking mode.
   * @returns Promise that resolves when SGR drag tracking is enabled
   */
  static async enableSGRDragTracking(): Promise<void> {
    await this.enableSGRMode()
    await this.enableDragTracking()
  }

  /**
   * Enables SGR mouse mode.
   * @returns Promise that resolves when SGR mode is enabled
   */
  static async enableSGRMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1006h`))
  }

  /**
   * Enables SGR move tracking mode.
   * @returns Promise that resolves when SGR move tracking is enabled
   */
  static async enableSGRMoveTracking(): Promise<void> {
    await this.enableSGRMode()
    await this.enableMoveTracking()
  }

  /**
   * Enables SGR tracking mode.
   * @returns Promise that resolves when SGR tracking is enabled
   */
  static async enableSGRTracking(): Promise<void> {
    await this.enableSGRMode()
    await this.enableTracking()
  }

  /**
   * Enables basic mouse tracking.
   * @returns Promise that resolves when tracking is enabled
   */
  static async enableTracking(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1000h`))
  }

  /**
   * Parses basic mouse event from input.
   * @param input - Raw input string containing mouse event
   * @returns Parsed mouse event data or null if invalid
   */
  static parseMouseEvent(input: string): MouseEventData | null {
    if (!input.startsWith(`${this.ESC}[M`)) {
      return null
    }
    const data = input.slice(3)
    if (data.length < 3) {
      return null
    }
    const button = data.charCodeAt(0) - 32
    const x = data.charCodeAt(1) - 32
    const y = data.charCodeAt(2) - 32
    let type: MouseEventType = 'click'
    if (button >= 64) {
      type = 'drag'
    }
    return { type, button: button & 3, x, y }
  }

  /**
   * Parses SGR mouse event from input.
   * @param input - Raw input string containing SGR mouse event
   * @returns Parsed SGR mouse event data or null if invalid
   */
  static parseSGREvent(input: string): MouseSGREventData | null {
    if (!input.startsWith(`${this.ESC}[<`)) {
      return null
    }
    const match = input.match(/\[<(\d+);(\d+);(\d+)([mM])/)
    if (!match || match.length < 5) {
      return null
    }
    const captures = match.slice(1, 5)
    if (captures.some((cap) => cap === undefined)) {
      return null
    }
    const [buttonStr, xStr, yStr, eventType] = captures as [string, string, string, string]
    const button = parseInt(buttonStr, 10)
    const x = parseInt(xStr, 10)
    const y = parseInt(yStr, 10)
    const modifiers = button & 0x1c
    const actualButton = button & 0x03
    const type: MouseEventType = eventType === 'M' ? 'press' : 'release'
    return { type, button: actualButton, x, y, modifiers }
  }
}
