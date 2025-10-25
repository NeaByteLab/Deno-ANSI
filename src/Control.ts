/**
 * ANSI control character utilities.
 * @description Basic control characters for terminal control.
 */
export class Control {
  /** Bell/alert character */
  static readonly BELL = '\x07'
  /** Backspace character */
  static readonly BACKSPACE = '\x08'
  /** Horizontal tab character */
  static readonly TAB = '\x09'
  /** Line feed character */
  static readonly LINE_FEED = '\x0A'
  /** Form feed character */
  static readonly FORM_FEED = '\x0C'
  /** Carriage return character */
  static readonly CARRIAGE_RETURN = '\x0D'

  /**
   * Returns backspace character.
   * @returns Backspace character
   */
  static backspace(): string {
    return this.BACKSPACE
  }

  /**
   * Returns bell/alert character.
   * @returns Bell character
   */
  static bell(): string {
    return this.BELL
  }

  /**
   * Returns carriage return character.
   * @returns Carriage return character
   */
  static carriageReturn(): string {
    return this.CARRIAGE_RETURN
  }

  /**
   * Returns form feed character.
   * @returns Form feed character
   */
  static formFeed(): string {
    return this.FORM_FEED
  }

  /**
   * Returns line feed character.
   * @returns Line feed character
   */
  static lineFeed(): string {
    return this.LINE_FEED
  }

  /**
   * Writes bell character to stdout.
   * @returns Promise that resolves when bell is written
   */
  static async ringBell(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(this.BELL))
  }

  /**
   * Returns horizontal tab character.
   * @returns Tab character
   */
  static tab(): string {
    return this.TAB
  }

  /**
   * Writes backspace character to stdout.
   * @returns Promise that resolves when backspace is written
   */
  static async writeBackspace(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(this.BACKSPACE))
  }

  /**
   * Writes carriage return character to stdout.
   * @returns Promise that resolves when carriage return is written
   */
  static async writeCarriageReturn(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(this.CARRIAGE_RETURN))
  }

  /**
   * Writes form feed character to stdout.
   * @returns Promise that resolves when form feed is written
   */
  static async writeFormFeed(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(this.FORM_FEED))
  }

  /**
   * Writes line feed character to stdout.
   * @returns Promise that resolves when line feed is written
   */
  static async writeLineFeed(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(this.LINE_FEED))
  }

  /**
   * Writes tab character to stdout.
   * @returns Promise that resolves when tab is written
   */
  static async writeTab(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(this.TAB))
  }
}
