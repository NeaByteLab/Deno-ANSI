/**
 * ANSI input handling utilities.
 * @description Keyboard input and escape sequence handling utilities.
 */
export class Input {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Disables raw mode for stdin.
   * @returns Promise that resolves when raw mode is disabled
   */
  static async disableRawMode(): Promise<void> {
    try {
      const DISABLE_RAW = false
      await Deno.stdin.setRaw(DISABLE_RAW)
    } catch {
      // Raw mode not available
    }
  }

  /**
   * Enables raw mode for stdin.
   * @returns Promise that resolves when raw mode is enabled
   */
  static async enableRawMode(): Promise<void> {
    try {
      const ENABLE_RAW = true
      await Deno.stdin.setRaw(ENABLE_RAW)
    } catch {
      // Raw mode not available
    }
  }

  /**
   * Reads a single character from stdin.
   * @returns Promise that resolves with the character read
   */
  static async readChar(): Promise<string> {
    const buffer = new Uint8Array(1)
    const bytesRead = await Deno.stdin.read(buffer)
    if (!bytesRead || bytesRead === 0) {
      return ''
    }
    const char = buffer[0]
    if (char === undefined) {
      return ''
    }
    return String.fromCharCode(char)
  }

  /**
   * Reads a key from stdin, parsing escape sequences.
   * @returns Promise that resolves with the key name or character
   */
  static async readKey(): Promise<string> {
    const buffer = new Uint8Array(20)
    const bytesRead = await Deno.stdin.read(buffer)
    if (!bytesRead || bytesRead === 0) {
      return ''
    }
    const input = new TextDecoder().decode(buffer.slice(0, bytesRead))
    if (input.startsWith(this.ESC)) {
      return this.parseEscapeSequence(input)
    }
    return input
  }

  /**
   * Waits for any key press.
   * @returns Promise that resolves with the key pressed
   */
  static async waitForAnyKey(): Promise<string> {
    try {
      return await this.readKey()
    } catch {
      return await this.readChar()
    }
  }

  /**
   * Waits for a specific key press.
   * @param expectedKey - The key to wait for
   * @returns Promise that resolves when the expected key is pressed
   */
  static async waitForKey(expectedKey: string): Promise<void> {
    const key = await this.readKey()
    if (key !== expectedKey) {
      return this.waitForKey(expectedKey)
    }
  }

  /**
   * Parses ANSI escape sequences into key names.
   * @param input - Raw input string containing escape sequence
   * @returns Parsed key name or original input if not recognized
   */
  private static parseEscapeSequence(input: string): string {
    const functionKeys = this.parseFunctionKeys(input)
    if (functionKeys) {
      return functionKeys
    }
    const navigationKeys = this.parseNavigationKeys(input)
    if (navigationKeys) {
      return navigationKeys
    }
    const keypadKeys = this.parseKeypadKeys(input)
    if (keypadKeys) {
      return keypadKeys
    }
    const specialKeys = this.parseSpecialKeys(input)
    if (specialKeys) {
      return specialKeys
    }
    return input
  }

  /**
   * Parses function key escape sequences.
   * @param input - Raw input string
   * @returns Function key name or null if not recognized
   */
  private static parseFunctionKeys(input: string): string | null {
    switch (input) {
      case `${this.ESC}[0;59`:
        return 'F1'
      case `${this.ESC}[0;60`:
        return 'F2'
      case `${this.ESC}[0;61`:
        return 'F3'
      case `${this.ESC}[0;62`:
        return 'F4'
      case `${this.ESC}[0;63`:
        return 'F5'
      case `${this.ESC}[0;64`:
        return 'F6'
      case `${this.ESC}[0;65`:
        return 'F7'
      case `${this.ESC}[0;66`:
        return 'F8'
      case `${this.ESC}[0;67`:
        return 'F9'
      case `${this.ESC}[0;68`:
        return 'F10'
      case `${this.ESC}[0;133`:
        return 'F11'
      case `${this.ESC}[0;134`:
        return 'F12'
      case `${this.ESC}[0;84`:
        return 'SHIFT+F1'
      case `${this.ESC}[0;85`:
        return 'SHIFT+F2'
      case `${this.ESC}[0;86`:
        return 'SHIFT+F3'
      case `${this.ESC}[0;87`:
        return 'SHIFT+F4'
      case `${this.ESC}[0;88`:
        return 'SHIFT+F5'
      case `${this.ESC}[0;89`:
        return 'SHIFT+F6'
      case `${this.ESC}[0;90`:
        return 'SHIFT+F7'
      case `${this.ESC}[0;91`:
        return 'SHIFT+F8'
      case `${this.ESC}[0;92`:
        return 'SHIFT+F9'
      case `${this.ESC}[0;93`:
        return 'SHIFT+F10'
      case `${this.ESC}[0;135`:
        return 'SHIFT+F11'
      case `${this.ESC}[0;136`:
        return 'SHIFT+F12'
      case `${this.ESC}[0;94`:
        return 'CTRL+F1'
      case `${this.ESC}[0;95`:
        return 'CTRL+F2'
      case `${this.ESC}[0;96`:
        return 'CTRL+F3'
      case `${this.ESC}[0;97`:
        return 'CTRL+F4'
      case `${this.ESC}[0;98`:
        return 'CTRL+F5'
      case `${this.ESC}[0;99`:
        return 'CTRL+F6'
      case `${this.ESC}[0;100`:
        return 'CTRL+F7'
      case `${this.ESC}[0;101`:
        return 'CTRL+F8'
      case `${this.ESC}[0;102`:
        return 'CTRL+F9'
      case `${this.ESC}[0;103`:
        return 'CTRL+F10'
      case `${this.ESC}[0;137`:
        return 'CTRL+F11'
      case `${this.ESC}[0;138`:
        return 'CTRL+F12'
      case `${this.ESC}[0;104`:
        return 'ALT+F1'
      case `${this.ESC}[0;105`:
        return 'ALT+F2'
      case `${this.ESC}[0;106`:
        return 'ALT+F3'
      case `${this.ESC}[0;107`:
        return 'ALT+F4'
      case `${this.ESC}[0;108`:
        return 'ALT+F5'
      case `${this.ESC}[0;109`:
        return 'ALT+F6'
      case `${this.ESC}[0;110`:
        return 'ALT+F7'
      case `${this.ESC}[0;111`:
        return 'ALT+F8'
      case `${this.ESC}[0;112`:
        return 'ALT+F9'
      case `${this.ESC}[0;113`:
        return 'ALT+F10'
      case `${this.ESC}[0;139`:
        return 'ALT+F11'
      case `${this.ESC}[0;140`:
        return 'ALT+F12'
      default:
        return null
    }
  }

  /**
   * Parses keypad key escape sequences.
   * @param input - Raw input string
   * @returns Keypad key name or null if not recognized
   */
  private static parseKeypadKeys(input: string): string | null {
    switch (input) {
      case `${this.ESC}[0;71`:
        return 'KP_HOME'
      case `${this.ESC}[0;72`:
        return 'KP_UP'
      case `${this.ESC}[0;73`:
        return 'KP_PAGE_UP'
      case `${this.ESC}[0;75`:
        return 'KP_LEFT'
      case `${this.ESC}[0;77`:
        return 'KP_RIGHT'
      case `${this.ESC}[0;79`:
        return 'KP_END'
      case `${this.ESC}[0;80`:
        return 'KP_DOWN'
      case `${this.ESC}[0;81`:
        return 'KP_PAGE_DOWN'
      case `${this.ESC}[0;82`:
        return 'KP_INSERT'
      case `${this.ESC}[0;83`:
        return 'KP_DELETE'
      case `${this.ESC}[0;119`:
        return 'CTRL+KP_HOME'
      case `${this.ESC}[0;132`:
        return 'CTRL+KP_PAGE_UP'
      case `${this.ESC}[0;115`:
        return 'CTRL+KP_LEFT'
      case `${this.ESC}[0;116`:
        return 'CTRL+KP_RIGHT'
      case `${this.ESC}[0;117`:
        return 'CTRL+KP_END'
      case `${this.ESC}[0;118`:
        return 'CTRL+KP_PAGE_DOWN'
      case `${this.ESC}[0;146`:
        return 'CTRL+KP_INSERT'
      case `${this.ESC}[0;147`:
        return 'CTRL+KP_DELETE'
      case `${this.ESC}[0;142`:
        return 'KP_DIVIDE'
      case `${this.ESC}[0;144`:
        return 'KP_MULTIPLY'
      case `${this.ESC}[0;149`:
        return 'KP_SUBTRACT'
      case `${this.ESC}[0;150`:
        return 'KP_ADD'
      case `${this.ESC}[0;166`:
        return 'KP_ENTER'
      case `${this.ESC}[0;78`:
        return 'CTRL+KP_MULTIPLY'
      case `${this.ESC}[0;55`:
        return 'CTRL+KP_ADD'
      default:
        return null
    }
  }

  /**
   * Parses navigation key escape sequences.
   * @param input - Raw input string
   * @returns Navigation key name or null if not recognized
   */
  private static parseNavigationKeys(input: string): string | null {
    switch (input) {
      case `${this.ESC}[A`:
        return 'UP'
      case `${this.ESC}[B`:
        return 'DOWN'
      case `${this.ESC}[C`:
        return 'RIGHT'
      case `${this.ESC}[D`:
        return 'LEFT'
      case `${this.ESC}[H`:
        return 'HOME'
      case `${this.ESC}[F`:
        return 'END'
      case `${this.ESC}[5~`:
        return 'PAGE_UP'
      case `${this.ESC}[6~`:
        return 'PAGE_DOWN'
      case `${this.ESC}[3~`:
        return 'DELETE'
      case `${this.ESC}[2~`:
        return 'INSERT'
      case `${this.ESC}[224;72`:
        return 'UP'
      case `${this.ESC}[224;80`:
        return 'DOWN'
      case `${this.ESC}[224;75`:
        return 'LEFT'
      case `${this.ESC}[224;77`:
        return 'RIGHT'
      case `${this.ESC}[224;71`:
        return 'HOME'
      case `${this.ESC}[224;79`:
        return 'END'
      case `${this.ESC}[224;73`:
        return 'PAGE_UP'
      case `${this.ESC}[224;81`:
        return 'PAGE_DOWN'
      case `${this.ESC}[224;82`:
        return 'INSERT'
      case `${this.ESC}[224;83`:
        return 'DELETE'
      case `${this.ESC}[224;119`:
        return 'CTRL+HOME'
      case `${this.ESC}[224;117`:
        return 'CTRL+END'
      case `${this.ESC}[224;132`:
        return 'CTRL+PAGE_UP'
      case `${this.ESC}[224;118`:
        return 'CTRL+PAGE_DOWN'
      case `${this.ESC}[224;115`:
        return 'CTRL+LEFT'
      case `${this.ESC}[224;116`:
        return 'CTRL+RIGHT'
      case `${this.ESC}[224;141`:
        return 'CTRL+UP'
      case `${this.ESC}[224;145`:
        return 'CTRL+DOWN'
      case `${this.ESC}[224;146`:
        return 'CTRL+INSERT'
      case `${this.ESC}[224;147`:
        return 'CTRL+DELETE'
      case `${this.ESC}[224;151`:
        return 'ALT+HOME'
      case `${this.ESC}[224;159`:
        return 'ALT+END'
      case `${this.ESC}[224;153`:
        return 'ALT+PAGE_UP'
      case `${this.ESC}[224;161`:
        return 'ALT+PAGE_DOWN'
      case `${this.ESC}[224;155`:
        return 'ALT+LEFT'
      case `${this.ESC}[224;157`:
        return 'ALT+RIGHT'
      case `${this.ESC}[224;152`:
        return 'ALT+UP'
      case `${this.ESC}[224;154`:
        return 'ALT+DOWN'
      case `${this.ESC}[224;162`:
        return 'ALT+INSERT'
      case `${this.ESC}[224;163`:
        return 'ALT+DELETE'
      default:
        return null
    }
  }

  /**
   * Parses special key escape sequences.
   * @param input - Raw input string
   * @returns Special key name or null if not recognized
   */
  private static parseSpecialKeys(input: string): string | null {
    switch (input) {
      case `${this.ESC}[0;114`:
        return 'CTRL+PRINT_SCREEN'
      case `${this.ESC}[0;0`:
        return 'CTRL+PAUSE'
      case `${this.ESC}[0;15`:
        return 'SHIFT+TAB'
      case `${this.ESC}[0;148`:
        return 'CTRL+TAB'
      case `${this.ESC}[0;165`:
        return 'ALT+TAB'
      case `${this.ESC}[127`:
        return 'CTRL+BACKSPACE'
      case `${this.ESC}[10`:
        return 'CTRL+ENTER'
      default:
        return null
    }
  }
}
