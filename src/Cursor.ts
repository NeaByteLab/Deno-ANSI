import type { CursorShape } from '@app/Types.ts'

/**
 * ANSI cursor control utilities.
 * @description Cursor position and visibility control methods.
 */
export class Cursor {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Moves cursor to home position (top-left corner).
   * @returns Promise that resolves when cursor is moved
   */
  static async home(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[H`))
  }

  /**
   * Moves cursor down by specified number of lines.
   * @param n - Number of lines to move down (default: 1)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveDown(n = 1): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${n}B`))
  }

  /**
   * Moves cursor left by specified number of columns.
   * @param n - Number of columns to move left (default: 1)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveLeft(n = 1): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${n}D`))
  }

  /**
   * Moves cursor right by specified number of columns.
   * @param n - Number of columns to move right (default: 1)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveRight(n = 1): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${n}C`))
  }

  /**
   * Moves cursor to specific coordinates.
   * @param x - Column position (1-based)
   * @param y - Row position (1-based)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveTo(x: number, y: number): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${y};${x}H`))
  }

  /**
   * Moves cursor to specific column.
   * @param n - Column number (1-based)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveToColumn(n: number): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${n}G`))
  }

  /**
   * Moves cursor to beginning of next line.
   * @param n - Number of lines to move (default: 1)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveToNextLine(n = 1): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${n}E`))
  }

  /**
   * Moves cursor to beginning of previous line.
   * @param n - Number of lines to move (default: 1)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveToPrevLine(n = 1): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${n}F`))
  }

  /**
   * Moves cursor up by specified number of lines.
   * @param n - Number of lines to move up (default: 1)
   * @returns Promise that resolves when cursor is moved
   */
  static async moveUp(n = 1): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${n}A`))
  }

  /**
   * Requests cursor position from terminal.
   * @returns Promise that resolves when position request is sent
   */
  static async requestPosition(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[6n`))
  }

  /**
   * Restores cursor position from save buffer.
   * @returns Promise that resolves when cursor is restored
   */
  static async restore(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC} 8`))
  }

  /**
   * Restores cursor position using SCO sequence.
   * @returns Promise that resolves when cursor is restored
   */
  static async restoreSCO(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[u`))
  }

  /**
   * Saves cursor position to save buffer.
   * @returns Promise that resolves when cursor position is saved
   */
  static async save(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC} 7`))
  }

  /**
   * Saves cursor position using SCO sequence.
   * @returns Promise that resolves when cursor position is saved
   */
  static async saveSCO(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[s`))
  }

  /**
   * Scrolls screen up.
   * @returns Promise that resolves when screen is scrolled
   */
  static async scrollUp(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}M`))
  }

  /**
   * Sets cursor blinking state.
   * @param blinking - Whether cursor should blink
   * @returns Promise that resolves when blinking state is set
   */
  static async setCursorBlinking(blinking: boolean): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?12${blinking ? 'h' : 'l'}`))
  }

  /**
   * Sets cursor shape.
   * @param shape - Cursor shape to set
   * @returns Promise that resolves when cursor shape is set
   * @throws {Error} When invalid cursor shape is provided
   */
  static async setCursorShape(shape: CursorShape): Promise<void> {
    const shapes = {
      block: 0,
      'blinking-block': 1,
      underline: 3,
      'blinking-underline': 4,
      bar: 5,
      'blinking-bar': 6
    }
    const shapeCode = shapes[shape]
    if (shapeCode === undefined) {
      throw new Error(`Invalid cursor shape: ${shape}`)
    }
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[${shapeCode} q`))
  }

  /**
   * Sets cursor visibility.
   * @param visible - Whether cursor should be visible
   * @returns Promise that resolves when cursor visibility is set
   */
  static async setCursorVisible(visible: boolean): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?25${visible ? 'h' : 'l'}`))
  }
}
