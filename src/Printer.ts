import type { PrinterMode } from '@app/Types.ts'

/**
 * Printer port control utilities.
 * @description Control printer output and port management.
 */
export class Printer {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Disables printer port.
   * @returns Promise that resolves when printer is disabled
   */
  static async disablePrinter(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?4i`))
  }

  /**
   * Enables printer port.
   * @returns Promise that resolves when printer is enabled
   */
  static async enablePrinter(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?5i`))
  }

  /**
   * Prints current line.
   * @returns Promise that resolves when line is printed
   */
  static async printLine(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[1i`))
  }

  /**
   * Prints current screen contents.
   * @returns Promise that resolves when screen is printed
   */
  static async printScreen(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[i`))
  }

  /**
   * Controls printer mode.
   * @param mode - Printer mode to set
   * @returns Promise that resolves when mode is set
   */
  static async setPrinterMode(mode: PrinterMode): Promise<void> {
    switch (mode) {
      case 'enable':
        await this.enablePrinter()
        break
      case 'disable':
        await this.disablePrinter()
        break
      case 'print-screen':
        await this.printScreen()
        break
    }
  }
}
