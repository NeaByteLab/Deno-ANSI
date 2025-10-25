import type { TerminalExtension } from '@app/Types.ts'

/**
 * Terminal-specific extension utilities.
 * @description Support for iTerm2, Konsole, VTE, and xterm extensions.
 */
export class Extensions {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Detects terminal extension based on environment variables.
   * @returns Detected terminal extension or null if unknown
   */
  static detectTerminalExtension(): TerminalExtension | null {
    const term = Deno.env.get('TERM_PROGRAM')
    const vteVersion = Deno.env.get('VTE_VERSION')
    const konsoleVersion = Deno.env.get('KONSOLE_VERSION')
    if (term === 'iTerm.app') {
      return 'iTerm2'
    }
    if (konsoleVersion) {
      return 'Konsole'
    }
    if (vteVersion) {
      return 'VTE'
    }
    if (term?.includes('xterm')) {
      return 'xterm'
    }
    return null
  }

  /**
   * Displays image in iTerm2.
   * @param path - Path to image file
   * @param name - Display name for the image
   * @returns Promise that resolves when image is displayed
   */
  static async iTerm2DisplayImage(path: string, name?: string): Promise<void> {
    const nameParam = name ? `name=${name};` : ''
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]1337;File=${nameParam}${path}${this.ESC}\\`)
    )
  }

  /**
   * Sets iTerm2 background color.
   * @param color - Color in hex format (e.g., '#000000')
   * @returns Promise that resolves when background color is set
   */
  static async iTerm2SetBackgroundColor(color: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]1337;BackgroundColor=${color}${this.ESC}\\`)
    )
  }

  /**
   * Sets iTerm2 badge format.
   * @param format - Badge format string
   * @returns Promise that resolves when badge is set
   */
  static async iTerm2SetBadge(format: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]1337;SetBadgeFormat=${format}${this.ESC}\\`)
    )
  }

  /**
   * Sets iTerm2 cursor color.
   * @param color - Color in hex format (e.g., '#FF0000')
   * @returns Promise that resolves when cursor color is set
   */
  static async iTerm2SetCursorColor(color: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]1337;CursorColor=${color}${this.ESC}\\`)
    )
  }

  /**
   * Sets iTerm2 profile.
   * @param profile - Profile name to switch to
   * @returns Promise that resolves when profile is set
   */
  static async iTerm2SetProfile(profile: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]1337;SetProfile=${profile}${this.ESC}\\`)
    )
  }

  /**
   * Sets iTerm2 tab title.
   * @param title - Tab title to set
   * @returns Promise that resolves when tab title is set
   */
  static async iTerm2SetTabTitle(title: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]1337;SetTabTitle=${title}${this.ESC}\\`)
    )
  }

  /**
   * Sets iTerm2 window title.
   * @param title - Window title to set
   * @returns Promise that resolves when window title is set
   */
  static async iTerm2SetWindowTitle(title: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]1337;SetWindowTitle=${title}${this.ESC}\\`)
    )
  }

  /**
   * Sets Konsole icon name.
   * @param name - Icon name to set
   * @returns Promise that resolves when icon name is set
   */
  static async konsoleSetIconName(name: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]31;${name}${this.ESC}\\`))
  }

  /**
   * Sets Konsole profile.
   * @param profile - Profile name to switch to
   * @returns Promise that resolves when profile is set
   */
  static async konsoleSetProfile(profile: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(`${this.ESC}]50;Profile=${profile}${this.ESC}\\`)
    )
  }

  /**
   * Sets Konsole title.
   * @param title - Title to set
   * @returns Promise that resolves when title is set
   */
  static async konsoleSetTitle(title: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]30;${title}${this.ESC}\\`))
  }

  /**
   * Sets icon name for specified terminal extension.
   * @param extension - Terminal extension type
   * @param name - Icon name to set
   * @returns Promise that resolves when icon name is set
   */
  static async setIconName(extension: TerminalExtension, name: string): Promise<void> {
    switch (extension) {
      case 'iTerm2':
        // iTerm2 doesn't have specific icon name setting
        break
      case 'Konsole':
        await this.konsoleSetIconName(name)
        break
      case 'VTE':
        await this.vteSetIconName(name)
        break
      case 'xterm':
        await this.xtermSetIconName(name)
        break
    }
  }

  /**
   * Sets title for specified terminal extension.
   * @param extension - Terminal extension type
   * @param title - Title to set
   * @returns Promise that resolves when title is set
   */
  static async setTitle(extension: TerminalExtension, title: string): Promise<void> {
    switch (extension) {
      case 'iTerm2':
        await this.iTerm2SetWindowTitle(title)
        break
      case 'Konsole':
        await this.konsoleSetTitle(title)
        break
      case 'VTE':
        await this.vteSetTitle(title)
        break
      case 'xterm':
        await this.xtermSetTitle(title)
        break
    }
  }

  /**
   * Sets VTE hyperlink.
   * @param uri - URI to link to
   * @param text - Text to display
   * @returns Promise that resolves when hyperlink is set
   */
  static async vteSetHyperlink(uri: string, text: string): Promise<void> {
    await Deno.stdout.write(
      new TextEncoder().encode(
        `${this.ESC}]8;;${uri}${this.ESC}\\${text}${this.ESC}]8;;${this.ESC}\\`
      )
    )
  }

  /**
   * Sets VTE icon name.
   * @param name - Icon name to set
   * @returns Promise that resolves when icon name is set
   */
  static async vteSetIconName(name: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]1;${name}${this.ESC}\\`))
  }

  /**
   * Sets VTE title.
   * @param title - Title to set
   * @returns Promise that resolves when title is set
   */
  static async vteSetTitle(title: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]0;${title}${this.ESC}\\`))
  }

  /**
   * Sets xterm background color.
   * @param color - Color in hex format (e.g., '#000000')
   * @returns Promise that resolves when background color is set
   */
  static async xtermSetBackgroundColor(color: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]11;${color}${this.ESC}\\`))
  }

  /**
   * Sets xterm foreground color.
   * @param color - Color in hex format (e.g., '#FFFFFF')
   * @returns Promise that resolves when foreground color is set
   */
  static async xtermSetForegroundColor(color: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]10;${color}${this.ESC}\\`))
  }

  /**
   * Sets xterm font.
   * @param font - Font name to set
   * @returns Promise that resolves when font is set
   */
  static async xtermSetFont(font: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]50;${font}${this.ESC}\\`))
  }

  /**
   * Sets xterm icon name.
   * @param name - Icon name to set
   * @returns Promise that resolves when icon name is set
   */
  static async xtermSetIconName(name: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]1;${name}${this.ESC}\\`))
  }

  /**
   * Sets xterm title.
   * @param title - Title to set
   * @returns Promise that resolves when title is set
   */
  static async xtermSetTitle(title: string): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}]0;${title}${this.ESC}\\`))
  }
}
