import type { CursorPosition, DeviceAttributes } from '@app/Types.ts'

/**
 * ANSI terminal control utilities.
 * @description Screen clearing and terminal mode control methods.
 */
export class Terminal {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Clears entire screen and saved lines.
   * @returns Promise that resolves when screen is cleared
   */
  static async clearAll(): Promise<void> {
    await this.clearScreen()
    await this.clearSavedLines()
  }

  /**
   * Clears all tab stops.
   * @returns Promise that resolves when all tab stops are cleared
   */
  static async clearAllTabStops(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[3g`))
  }

  /**
   * Clears entire current line.
   * @returns Promise that resolves when line is cleared
   */
  static async clearLine(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[2K`))
  }

  /**
   * Clears from cursor to beginning of line.
   * @returns Promise that resolves when line is cleared
   */
  static async clearLineToBeginning(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[1K`))
  }

  /**
   * Clears from cursor to end of line.
   * @returns Promise that resolves when line is cleared
   */
  static async clearLineToEnd(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[0K`))
  }

  /**
   * Clears saved lines buffer.
   * @returns Promise that resolves when saved lines are cleared
   */
  static async clearSavedLines(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[3J`))
  }

  /**
   * Clears entire screen.
   * @returns Promise that resolves when screen is cleared
   */
  static async clearScreen(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[2J`))
  }

  /**
   * Clears tab stop at current cursor position.
   * @returns Promise that resolves when tab stop is cleared
   */
  static async clearTabStop(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[g`))
  }

  /**
   * Clears from cursor to beginning of screen.
   * @returns Promise that resolves when screen is cleared
   */
  static async clearToBeginning(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[1J`))
  }

  /**
   * Clears from cursor to end of screen.
   * @returns Promise that resolves when screen is cleared
   */
  static async clearToEnd(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[0J`))
  }

  /**
   * Disables 132 column mode (DECCOLM).
   * @returns Promise that resolves when 132 column mode is disabled
   */
  static async disable132ColumnMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?3l`))
  }

  /**
   * Disables alternate buffer.
   * @returns Promise that resolves when alternate buffer is disabled
   */
  static async disableAltBuffer(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1049l`))
  }

  /**
   * Disables ANSI/VT52 mode (DECANM).
   * @returns Promise that resolves when ANSI/VT52 mode is disabled
   */
  static async disableANSIVT52Mode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?2l`))
  }

  /**
   * Disables application cursor keys mode.
   * @returns Promise that resolves when mode is disabled
   */
  static async disableApplicationCursorKeys(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1l`))
  }

  /**
   * Disables auto-repeat mode (DECARM).
   * @returns Promise that resolves when auto-repeat mode is disabled
   */
  static async disableAutoRepeatMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?8l`))
  }

  /**
   * Disables bracketed paste mode.
   * @returns Promise that resolves when mode is disabled
   */
  static async disableBracketedPaste(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?2004l`))
  }

  /**
   * Disables focus events reporting.
   * @returns Promise that resolves when focus events are disabled
   */
  static async disableFocusEvents(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1004l`))
  }

  /**
   * Disables insert mode (DECIM).
   * @returns Promise that resolves when insert mode is disabled
   */
  static async disableInsertMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[4l`))
  }

  /**
   * Disables line wrapping.
   * @returns Promise that resolves when line wrapping is disabled
   */
  static async disableLineWrapping(): Promise<void> {
    await this.resetMode(7)
  }

  /**
   * Disables mouse highlight tracking.
   * @returns Promise that resolves when highlight tracking is disabled
   */
  static async disableMouseHighlight(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1001l`))
  }

  /**
   * Disables origin mode (DECOM).
   * @returns Promise that resolves when origin mode is disabled
   */
  static async disableOriginMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?6l`))
  }

  /**
   * Disables smooth scrolling mode (DECSCLM).
   * @returns Promise that resolves when smooth scrolling is disabled
   */
  static async disableSmoothScrolling(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?4l`))
  }

  /**
   * Enables 132 column mode (DECCOLM).
   * @returns Promise that resolves when 132 column mode is enabled
   */
  static async enable132ColumnMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?3h`))
  }

  /**
   * Enables alternate buffer.
   * @returns Promise that resolves when alternate buffer is enabled
   */
  static async enableAltBuffer(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1049h`))
  }

  /**
   * Enables ANSI/VT52 mode (DECANM).
   * @returns Promise that resolves when ANSI/VT52 mode is enabled
   */
  static async enableANSIVT52Mode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?2h`))
  }

  /**
   * Enables application cursor keys mode.
   * @returns Promise that resolves when mode is enabled
   */
  static async enableApplicationCursorKeys(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1h`))
  }

  /**
   * Enables auto-repeat mode (DECARM).
   * @returns Promise that resolves when auto-repeat mode is enabled
   */
  static async enableAutoRepeatMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?8h`))
  }

  /**
   * Enables bracketed paste mode.
   * @returns Promise that resolves when mode is enabled
   */
  static async enableBracketedPaste(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?2004h`))
  }

  /**
   * Enables focus events reporting.
   * @returns Promise that resolves when focus events are enabled
   */
  static async enableFocusEvents(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1004h`))
  }

  /**
   * Enables insert mode (DECIM).
   * @returns Promise that resolves when insert mode is enabled
   */
  static async enableInsertMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[4h`))
  }

  /**
   * Enables line wrapping.
   * @returns Promise that resolves when line wrapping is enabled
   */
  static async enableLineWrapping(): Promise<void> {
    await this.setMode(7)
  }

  /**
   * Enables mouse highlight tracking.
   * @returns Promise that resolves when highlight tracking is enabled
   */
  static async enableMouseHighlight(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?1001h`))
  }

  /**
   * Enables origin mode (DECOM).
   * @returns Promise that resolves when origin mode is enabled
   */
  static async enableOriginMode(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?6h`))
  }

  /**
   * Enables smooth scrolling mode (DECSCLM).
   * @returns Promise that resolves when smooth scrolling is enabled
   */
  static async enableSmoothScrolling(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?4h`))
  }

  /**
   * Gets terminal size.
   * @returns Promise that resolves with terminal dimensions
   */
  static async getSize(): Promise<{ width: number; height: number }> {
    try {
      const size = await Deno.consoleSize()
      return { width: size.columns, height: size.rows }
    } catch {
      return { width: 80, height: 24 }
    }
  }

  /**
   * Hides cursor.
   * @returns Promise that resolves when cursor is hidden
   */
  static async hideCursor(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?25l`))
  }

  /**
   * Parses cursor position response.
   * @param input - Raw input string containing cursor position
   * @returns Parsed cursor position or null if invalid
   */
  static parseCursorPosition(input: string): CursorPosition | null {
    const match = input.match(new RegExp(`${this.ESC}\\[(\\d+);(\\d+)R`))
    if (!match || !match[1] || !match[2]) {
      return null
    }
    return { row: parseInt(match[1]), col: parseInt(match[2]) }
  }

  /**
   * Parses device attributes response.
   * @param input - Raw input string containing device attributes
   * @returns Parsed device attributes or null if invalid
   */
  static parseDeviceAttributes(input: string): DeviceAttributes | null {
    const match = input.match(new RegExp(`${this.ESC}\\[(\\d+);(\\d+);(\\d+);(\\d+);(\\d+)c`))
    if (!match || !match[1] || !match[2]) {
      return null
    }
    return { type: match[1], version: match[2] }
  }

  /**
   * Requests device attributes from terminal.
   * @returns Promise that resolves when request is sent
   */
  static async requestDeviceAttributes(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[c`))
  }

  /**
   * Resets all terminal attributes.
   * @returns Promise that resolves when attributes are reset
   */
  static async reset(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[0m`))
  }

  /**
   * Resets icon name.
   * @returns Promise that resolves when icon name is reset
   */
  static async resetIconName(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]1;${this.ESC}\\`))
  }

  /**
   * Resets terminal mode.
   * @param mode - Mode number to reset
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode(mode: number): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[=${mode}l`))
  }

  /**
   * Resets 320x200 256-color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode320x200_256Color(): Promise<void> {
    await this.resetMode(19)
  }

  /**
   * Resets 320x200 4-color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode320x200_4Color(): Promise<void> {
    await this.resetMode(4)
  }

  /**
   * Resets 320x200 color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode320x200Color(): Promise<void> {
    await this.resetMode(13)
  }

  /**
   * Resets 320x200 monochrome mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode320x200Mono(): Promise<void> {
    await this.resetMode(5)
  }

  /**
   * Resets 40x25 color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode40x25Color(): Promise<void> {
    await this.resetMode(1)
  }

  /**
   * Resets 40x25 monochrome mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode40x25Mono(): Promise<void> {
    await this.resetMode(0)
  }

  /**
   * Resets 640x200 16-color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode640x200_16Color(): Promise<void> {
    await this.resetMode(14)
  }

  /**
   * Resets 640x200 monochrome mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode640x200Mono(): Promise<void> {
    await this.resetMode(6)
  }

  /**
   * Resets 640x350 16-color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode640x350_16Color(): Promise<void> {
    await this.resetMode(16)
  }

  /**
   * Resets 640x350 monochrome mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode640x350Mono(): Promise<void> {
    await this.resetMode(15)
  }

  /**
   * Resets 640x480 16-color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode640x480_16Color(): Promise<void> {
    await this.resetMode(18)
  }

  /**
   * Resets 640x480 monochrome mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode640x480Mono(): Promise<void> {
    await this.resetMode(17)
  }

  /**
   * Resets 80x25 color mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode80x25Color(): Promise<void> {
    await this.resetMode(3)
  }

  /**
   * Resets 80x25 monochrome mode.
   * @returns Promise that resolves when mode is reset
   */
  static async resetMode80x25Mono(): Promise<void> {
    await this.resetMode(2)
  }

  /**
   * Resets window title.
   * @returns Promise that resolves when window title is reset
   */
  static async resetWindowTitle(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]0;${this.ESC}\\`))
  }

  /**
   * Restores saved screen.
   * @returns Promise that resolves when screen is restored
   */
  static async restoreScreen(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?47l`))
  }

  /**
   * Saves current screen.
   * @returns Promise that resolves when screen is saved
   */
  static async saveScreen(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?47h`))
  }

  /**
   * Sets icon name.
   * @param name - Icon name to set
   * @returns Promise that resolves when icon name is set
   */
  static async setIconName(name: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]1;${name}${this.ESC}\\`))
  }

  /**
   * Sets terminal mode.
   * @param mode - Mode number to set
   * @returns Promise that resolves when mode is set
   */
  static async setMode(mode: number): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[=${mode}h`))
  }

  /**
   * Sets 320x200 256-color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode320x200_256Color(): Promise<void> {
    await this.setMode(19)
  }

  /**
   * Sets 320x200 4-color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode320x200_4Color(): Promise<void> {
    await this.setMode(4)
  }

  /**
   * Sets 320x200 color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode320x200Color(): Promise<void> {
    await this.setMode(13)
  }

  /**
   * Sets 320x200 monochrome mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode320x200Mono(): Promise<void> {
    await this.setMode(5)
  }

  /**
   * Sets 40x25 color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode40x25Color(): Promise<void> {
    await this.setMode(1)
  }

  /**
   * Sets 40x25 monochrome mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode40x25Mono(): Promise<void> {
    await this.setMode(0)
  }

  /**
   * Sets 640x200 16-color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode640x200_16Color(): Promise<void> {
    await this.setMode(14)
  }

  /**
   * Sets 640x200 monochrome mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode640x200Mono(): Promise<void> {
    await this.setMode(6)
  }

  /**
   * Sets 640x350 16-color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode640x350_16Color(): Promise<void> {
    await this.setMode(16)
  }

  /**
   * Sets 640x350 monochrome mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode640x350Mono(): Promise<void> {
    await this.setMode(15)
  }

  /**
   * Sets 640x480 16-color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode640x480_16Color(): Promise<void> {
    await this.setMode(18)
  }

  /**
   * Sets 640x480 monochrome mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode640x480Mono(): Promise<void> {
    await this.setMode(17)
  }

  /**
   * Sets 80x25 color mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode80x25Color(): Promise<void> {
    await this.setMode(3)
  }

  /**
   * Sets 80x25 monochrome mode.
   * @returns Promise that resolves when mode is set
   */
  static async setMode80x25Mono(): Promise<void> {
    await this.setMode(2)
  }

  /**
   * Sets tab stop at current cursor position.
   * @returns Promise that resolves when tab stop is set
   */
  static async setTabStop(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[H`))
  }

  /**
   * Sets window title.
   * @param title - Title to set
   * @returns Promise that resolves when title is set
   */
  static async setWindowTitle(title: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]0;${title}${this.ESC}\\`))
  }

  /**
   * Shows cursor.
   * @returns Promise that resolves when cursor is shown
   */
  static async showCursor(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?25h`))
  }

  /**
   * Writes text to stdout.
   * @param text - Text to write
   * @returns Promise that resolves when text is written
   */
  static async write(text: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(text))
  }

  /**
   * Writes text to stdout with newline.
   * @param text - Text to write
   * @returns Promise that resolves when text is written
   */
  static async writeln(text: string): Promise<void> {
    await this.write(text + '\n')
  }
}
