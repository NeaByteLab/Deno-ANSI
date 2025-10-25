import type { VT100Feature } from '@app/Types.ts'

/**
 * Advanced VT100/VT220 terminal features.
 * @description Double-width, double-height, smooth scrolling, and other advanced features.
 */
export class VT100 {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Disables double-height characters.
   * @returns Promise that resolves when double-height is disabled
   */
  static async disableDoubleHeight(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}#5`))
  }

  /**
   * Disables double-width characters.
   * @returns Promise that resolves when double-width is disabled
   */
  static async disableDoubleWidth(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}#5`))
  }

  /**
   * Disables double-width and double-height characters.
   * @returns Promise that resolves when double-width-height is disabled
   */
  static async disableDoubleWidthHeight(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}#5`))
  }

  /**
   * Disables specified VT100 feature.
   * @param feature - VT100 feature to disable
   * @returns Promise that resolves when feature is disabled
   */
  static async disableFeature(feature: VT100Feature): Promise<void> {
    switch (feature) {
      case 'double-width':
        await this.disableDoubleWidth()
        break
      case 'double-height':
        await this.disableDoubleHeight()
        break
      case 'double-width-height':
        await this.disableDoubleWidthHeight()
        break
      case 'soft-fonts':
        await this.disableSoftFonts()
        break
    }
  }

  /**
   * Disables soft fonts.
   * @returns Promise that resolves when soft fonts are disabled
   */
  static async disableSoftFonts(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?50l`))
  }

  /**
   * Enables double-height characters.
   * @returns Promise that resolves when double-height is enabled
   */
  static async enableDoubleHeight(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}#4`))
  }

  /**
   * Enables double-width characters.
   * @returns Promise that resolves when double-width is enabled
   */
  static async enableDoubleWidth(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}#3`))
  }

  /**
   * Enables double-width and double-height characters.
   * @returns Promise that resolves when double-width-height is enabled
   */
  static async enableDoubleWidthHeight(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}#6`))
  }

  /**
   * Enables specified VT100 feature.
   * @param feature - VT100 feature to enable
   * @returns Promise that resolves when feature is enabled
   */
  static async enableFeature(feature: VT100Feature): Promise<void> {
    switch (feature) {
      case 'double-width':
        await this.enableDoubleWidth()
        break
      case 'double-height':
        await this.enableDoubleHeight()
        break
      case 'double-width-height':
        await this.enableDoubleWidthHeight()
        break
      case 'soft-fonts':
        await this.enableSoftFonts()
        break
    }
  }

  /**
   * Enables soft fonts.
   * @returns Promise that resolves when soft fonts are enabled
   */
  static async enableSoftFonts(): Promise<void> {
    await Deno.stdout.write(new TextEncoder().encode(`${this.ESC}[?50h`))
  }
}
