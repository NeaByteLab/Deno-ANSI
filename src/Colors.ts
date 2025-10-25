/**
 * ANSI color and text styling utilities.
 * @description Text colorization and styling methods.
 */
export class Colors {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'
  /** ANSI reset sequence */
  private static readonly RESET = `${this.ESC}[0m`
  /** Black foreground color code */
  static readonly BLACK = 30
  /** Red foreground color code */
  static readonly RED = 31
  /** Green foreground color code */
  static readonly GREEN = 32
  /** Yellow foreground color code */
  static readonly YELLOW = 33
  /** Blue foreground color code */
  static readonly BLUE = 34
  /** Magenta foreground color code */
  static readonly MAGENTA = 35
  /** Cyan foreground color code */
  static readonly CYAN = 36
  /** White foreground color code */
  static readonly WHITE = 37
  /** Default foreground color code */
  static readonly DEFAULT = 39
  /** Black background color code */
  static readonly BG_BLACK = 40
  /** Red background color code */
  static readonly BG_RED = 41
  /** Green background color code */
  static readonly BG_GREEN = 42
  /** Yellow background color code */
  static readonly BG_YELLOW = 43
  /** Blue background color code */
  static readonly BG_BLUE = 44
  /** Magenta background color code */
  static readonly BG_MAGENTA = 45
  /** Cyan background color code */
  static readonly BG_CYAN = 46
  /** White background color code */
  static readonly BG_WHITE = 47
  /** Default background color code */
  static readonly BG_DEFAULT = 49
  /** Bright black foreground color code */
  static readonly BRIGHT_BLACK = 90
  /** Bright red foreground color code */
  static readonly BRIGHT_RED = 91
  /** Bright green foreground color code */
  static readonly BRIGHT_GREEN = 92
  /** Bright yellow foreground color code */
  static readonly BRIGHT_YELLOW = 93
  /** Bright blue foreground color code */
  static readonly BRIGHT_BLUE = 94
  /** Bright magenta foreground color code */
  static readonly BRIGHT_MAGENTA = 95
  /** Bright cyan foreground color code */
  static readonly BRIGHT_CYAN = 96
  /** Bright white foreground color code */
  static readonly BRIGHT_WHITE = 97
  /** Bright black background color code */
  static readonly BG_BRIGHT_BLACK = 100
  /** Bright red background color code */
  static readonly BG_BRIGHT_RED = 101
  /** Bright green background color code */
  static readonly BG_BRIGHT_GREEN = 102
  /** Bright yellow background color code */
  static readonly BG_BRIGHT_YELLOW = 103
  /** Bright blue background color code */
  static readonly BG_BRIGHT_BLUE = 104
  /** Bright magenta background color code */
  static readonly BG_BRIGHT_MAGENTA = 105
  /** Bright cyan background color code */
  static readonly BG_BRIGHT_CYAN = 106
  /** Bright white background color code */
  static readonly BG_BRIGHT_WHITE = 107
  /** Bold text style code */
  static readonly BOLD = 1
  /** Dim text style code */
  static readonly DIM = 2
  /** Italic text style code */
  static readonly ITALIC = 3
  /** Underline text style code */
  static readonly UNDERLINE = 4
  /** Blink text style code */
  static readonly BLINK = 5
  /** Inverse text style code */
  static readonly INVERSE = 7
  /** Hidden text style code */
  static readonly HIDDEN = 8
  /** Strikethrough text style code */
  static readonly STRIKETHROUGH = 9

  /**
   * Applies background color to text.
   * @param text - Text to apply background color to
   * @param color - Background color code
   * @returns Text with background color applied
   */
  static bg(text: string, color: number): string {
    return `${this.ESC}[${color}m${text}${this.RESET}`
  }

  /**
   * Applies 256-color background to text.
   * @param text - Text to apply background color to
   * @param colorId - 256-color palette ID (0-255)
   * @returns Text with 256-color background applied
   */
  static bg256(text: string, colorId: number): string {
    return `${this.ESC}[48;5;${colorId}m${text}${this.RESET}`
  }

  /**
   * Applies RGB background color to text.
   * @param text - Text to apply background color to
   * @param r - Red component (0-255)
   * @param g - Green component (0-255)
   * @param b - Blue component (0-255)
   * @returns Text with RGB background color applied
   */
  static bgRgb(text: string, r: number, g: number, b: number): string {
    return `${this.ESC}[48;2;${r};${g};${b}m${text}${this.RESET}`
  }

  /**
   * Applies black foreground color to text.
   * @param text - Text to colorize
   * @returns Text with black foreground color
   */
  static black(text: string): string {
    return this.fg(text, this.BLACK)
  }

  /**
   * Applies blink effect to text.
   * @param text - Text to apply blink effect to
   * @returns Text with blink effect applied
   */
  static blink(text: string): string {
    return this.style(text, this.BLINK)
  }

  /**
   * Applies blue foreground color to text.
   * @param text - Text to colorize
   * @returns Text with blue foreground color
   */
  static blue(text: string): string {
    return this.fg(text, this.BLUE)
  }

  /**
   * Applies bold style to text.
   * @param text - Text to make bold
   * @returns Text with bold style applied
   */
  static bold(text: string): string {
    return this.style(text, this.BOLD)
  }

  /**
   * Applies bright black foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright black foreground color
   */
  static brightBlack(text: string): string {
    return this.fg(text, this.BRIGHT_BLACK)
  }

  /**
   * Applies bright blue foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright blue foreground color
   */
  static brightBlue(text: string): string {
    return this.fg(text, this.BRIGHT_BLUE)
  }

  /**
   * Applies bright cyan foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright cyan foreground color
   */
  static brightCyan(text: string): string {
    return this.fg(text, this.BRIGHT_CYAN)
  }

  /**
   * Applies bright green foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright green foreground color
   */
  static brightGreen(text: string): string {
    return this.fg(text, this.BRIGHT_GREEN)
  }

  /**
   * Applies bright magenta foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright magenta foreground color
   */
  static brightMagenta(text: string): string {
    return this.fg(text, this.BRIGHT_MAGENTA)
  }

  /**
   * Applies bright red foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright red foreground color
   */
  static brightRed(text: string): string {
    return this.fg(text, this.BRIGHT_RED)
  }

  /**
   * Applies bright white foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright white foreground color
   */
  static brightWhite(text: string): string {
    return this.fg(text, this.BRIGHT_WHITE)
  }

  /**
   * Applies bright yellow foreground color to text.
   * @param text - Text to colorize
   * @returns Text with bright yellow foreground color
   */
  static brightYellow(text: string): string {
    return this.fg(text, this.BRIGHT_YELLOW)
  }

  /**
   * Applies 256-color foreground to text.
   * @param text - Text to apply foreground color to
   * @param colorId - 256-color palette ID (0-255)
   * @returns Text with 256-color foreground applied
   */
  static color256(text: string, colorId: number): string {
    return `${this.ESC}[38;5;${colorId}m${text}${this.RESET}`
  }

  /**
   * Applies cyan foreground color to text.
   * @param text - Text to colorize
   * @returns Text with cyan foreground color
   */
  static cyan(text: string): string {
    return this.fg(text, this.CYAN)
  }

  /**
   * Applies dim style to text.
   * @param text - Text to make dim
   * @returns Text with dim style applied
   */
  static dim(text: string): string {
    return this.style(text, this.DIM)
  }

  /**
   * Applies double underline style to text.
   * @param text - Text to apply double underline to
   * @returns Text with double underline style applied
   */
  static doubleUnderline(text: string): string {
    return `${this.ESC}[21m${text}${this.RESET}`
  }

  /**
   * Applies encircled style to text.
   * @param text - Text to encircle
   * @returns Text with encircled style applied
   */
  static encircled(text: string): string {
    return `${this.ESC}[52m${text}${this.RESET}`
  }

  /**
   * Applies foreground color to text.
   * @param text - Text to apply foreground color to
   * @param color - Foreground color code
   * @returns Text with foreground color applied
   */
  static fg(text: string, color: number): string {
    return `${this.ESC}[${color}m${text}${this.RESET}`
  }

  /**
   * Applies both foreground and background colors to text.
   * @param text - Text to apply colors to
   * @param fgColor - Foreground color code
   * @param bgColor - Background color code
   * @returns Text with both foreground and background colors applied
   */
  static fgBg(text: string, fgColor: number, bgColor: number): string {
    return `${this.ESC}[${fgColor};${bgColor}m${text}${this.RESET}`
  }

  /**
   * Applies framed style to text.
   * @param text - Text to frame
   * @returns Text with framed style applied
   */
  static framed(text: string): string {
    return `${this.ESC}[51m${text}${this.RESET}`
  }

  /**
   * Applies green foreground color to text.
   * @param text - Text to colorize
   * @returns Text with green foreground color
   */
  static green(text: string): string {
    return this.fg(text, this.GREEN)
  }

  /**
   * Applies hidden style to text.
   * @param text - Text to hide
   * @returns Text with hidden style applied
   */
  static hidden(text: string): string {
    return this.style(text, this.HIDDEN)
  }

  /**
   * Creates a hyperlink in terminal.
   * @param text - Text to display as hyperlink
   * @param url - URL to link to
   * @returns Text formatted as hyperlink
   * @throws {Error} When text or URL is empty
   */
  static hyperlink(text: string, url: string): string {
    if (!text || !url) {
      throw new Error('Text and URL are required for hyperlinks')
    }
    return `${this.ESC}]8;;${url}${this.ESC}\\${text}${this.ESC}]8;;${this.ESC}\\`
  }

  /**
   * Applies inverse style to text.
   * @param text - Text to invert
   * @returns Text with inverse style applied
   */
  static inverse(text: string): string {
    return this.style(text, this.INVERSE)
  }

  /**
   * Applies italic style to text.
   * @param text - Text to make italic
   * @returns Text with italic style applied
   */
  static italic(text: string): string {
    return this.style(text, this.ITALIC)
  }

  /**
   * Applies magenta foreground color to text.
   * @param text - Text to colorize
   * @returns Text with magenta foreground color
   */
  static magenta(text: string): string {
    return this.fg(text, this.MAGENTA)
  }

  /**
   * Applies overline style to text.
   * @param text - Text to apply overline to
   * @returns Text with overline style applied
   */
  static overline(text: string): string {
    return `${this.ESC}[53m${text}${this.RESET}`
  }

  /**
   * Applies proportional spacing to text.
   * @param text - Text to apply proportional spacing to
   * @returns Text with proportional spacing applied
   */
  static proportionalSpacing(text: string): string {
    return `${this.ESC}[26m${text}${this.RESET}`
  }

  /**
   * Applies red foreground color to text.
   * @param text - Text to colorize
   * @returns Text with red foreground color
   */
  static red(text: string): string {
    return this.fg(text, this.RED)
  }

  /**
   * Returns ANSI reset sequence.
   * @returns ANSI reset escape sequence
   */
  static reset(): string {
    return this.RESET
  }

  /**
   * Returns ANSI sequence to reset double underline.
   * @returns ANSI sequence to reset double underline
   */
  static resetDoubleUnderline(): string {
    return `${this.ESC}[24m`
  }

  /**
   * Returns ANSI sequence to reset framed and encircled styles.
   * @returns ANSI sequence to reset framed and encircled styles
   */
  static resetFramedEncircled(): string {
    return `${this.ESC}[54m`
  }

  /**
   * Returns ANSI sequence to reset overline.
   * @returns ANSI sequence to reset overline
   */
  static resetOverline(): string {
    return `${this.ESC}[55m`
  }

  /**
   * Applies RGB foreground color to text.
   * @param text - Text to apply foreground color to
   * @param r - Red component (0-255)
   * @param g - Green component (0-255)
   * @param b - Blue component (0-255)
   * @returns Text with RGB foreground color applied
   */
  static rgb(text: string, r: number, g: number, b: number): string {
    return `${this.ESC}[38;2;${r};${g};${b}m${text}${this.RESET}`
  }

  /**
   * Applies strikethrough style to text.
   * @param text - Text to strike through
   * @returns Text with strikethrough style applied
   */
  static strikethrough(text: string): string {
    return this.style(text, this.STRIKETHROUGH)
  }

  /**
   * Applies multiple styles to text.
   * @param text - Text to apply styles to
   * @param styles - Array of style codes to apply
   * @returns Text with all specified styles applied
   */
  static style(text: string, ...styles: number[]): string {
    const codes = styles.join(';')
    return `${this.ESC}[${codes}m${text}${this.RESET}`
  }

  /**
   * Applies underline style to text.
   * @param text - Text to underline
   * @returns Text with underline style applied
   */
  static underline(text: string): string {
    return this.style(text, this.UNDERLINE)
  }

  /**
   * Applies white foreground color to text.
   * @param text - Text to colorize
   * @returns Text with white foreground color
   */
  static white(text: string): string {
    return this.fg(text, this.WHITE)
  }

  /**
   * Applies yellow foreground color to text.
   * @param text - Text to colorize
   * @returns Text with yellow foreground color
   */
  static yellow(text: string): string {
    return this.fg(text, this.YELLOW)
  }
}
