import type { CharsetName, CharsetType, CharsetTypeG2G3 } from '@app/Types.ts'

/**
 * ANSI character set utilities.
 * @description Character set switching and selection methods.
 */
export class Charsets {
  /** ANSI escape character */
  private static readonly ESC = '\x1B'

  /**
   * Applies G0 character set to text.
   * @param text - Text to apply character set to
   * @param charset - Character set to apply
   * @returns Text with G0 character set applied
   */
  static applyG0(text: string, charset: CharsetType): string {
    const sequences = {
      USASCII: this.setG0_USASCII(),
      UK: this.setG0_UK(),
      DECSpecial: this.setG0_DECSpecial(),
      DECSupplemental: this.setG0_DECSupplemental()
    }
    return `${sequences[charset]}${text}`
  }

  /**
   * Applies G1 character set to text.
   * @param text - Text to apply character set to
   * @param charset - Character set to apply
   * @returns Text with G1 character set applied
   */
  static applyG1(text: string, charset: CharsetType): string {
    const sequences = {
      USASCII: this.setG1_USASCII(),
      UK: this.setG1_UK(),
      DECSpecial: this.setG1_DECSpecial(),
      DECSupplemental: this.setG1_DECSupplemental()
    }
    return `${sequences[charset]}${text}`
  }

  /**
   * Applies G2 character set to text.
   * @param text - Text to apply character set to
   * @param charset - Character set to apply
   * @returns Text with G2 character set applied
   */
  static applyG2(text: string, charset: CharsetTypeG2G3): string {
    const sequences = {
      USASCII: this.setG2_USASCII(),
      DECSpecial: this.setG2_DECSpecial()
    }
    return `${sequences[charset]}${text}`
  }

  /**
   * Applies G3 character set to text.
   * @param text - Text to apply character set to
   * @param charset - Character set to apply
   * @returns Text with G3 character set applied
   */
  static applyG3(text: string, charset: CharsetTypeG2G3): string {
    const sequences = {
      USASCII: this.setG3_USASCII(),
      DECSpecial: this.setG3_DECSpecial()
    }
    return `${sequences[charset]}${text}`
  }

  /**
   * Writes character set selection sequence to stdout.
   * @param set - Character set to select (G0, G1, G2, G3)
   * @returns Promise that resolves when sequence is written
   */
  static async selectCharacterSet(set: CharsetName): Promise<void> {
    const sequences = {
      G0: this.selectG0(),
      G1: this.selectG1(),
      G2: this.selectG2(),
      G3: this.selectG3()
    }
    await Deno.stdout.write(new TextEncoder().encode(sequences[set]))
  }

  /**
   * Selects G0 character set.
   * @returns G0 selection sequence
   */
  static selectG0(): string {
    return `${this.ESC}(0`
  }

  /**
   * Selects G1 character set.
   * @returns G1 selection sequence
   */
  static selectG1(): string {
    return `${this.ESC})0`
  }

  /**
   * Selects G2 character set.
   * @returns G2 selection sequence
   */
  static selectG2(): string {
    return `${this.ESC}*0`
  }

  /**
   * Selects G3 character set.
   * @returns G3 selection sequence
   */
  static selectG3(): string {
    return `${this.ESC}+0`
  }

  /**
   * Sets G0 character set to DEC Special Graphics.
   * @returns G0 DEC Special Graphics character set sequence
   */
  static setG0_DECSpecial(): string {
    return `${this.ESC}(0`
  }

  /**
   * Sets G0 character set to DEC Supplemental Graphics.
   * @returns G0 DEC Supplemental Graphics character set sequence
   */
  static setG0_DECSupplemental(): string {
    return `${this.ESC}(<`
  }

  /**
   * Sets G0 character set to UK.
   * @returns G0 UK character set sequence
   */
  static setG0_UK(): string {
    return `${this.ESC}(A`
  }

  /**
   * Sets G0 character set to US ASCII.
   * @returns G0 US ASCII character set sequence
   */
  static setG0_USASCII(): string {
    return `${this.ESC}(B`
  }

  /**
   * Sets G1 character set to DEC Special Graphics.
   * @returns G1 DEC Special Graphics character set sequence
   */
  static setG1_DECSpecial(): string {
    return `${this.ESC})0`
  }

  /**
   * Sets G1 character set to DEC Supplemental Graphics.
   * @returns G1 DEC Supplemental Graphics character set sequence
   */
  static setG1_DECSupplemental(): string {
    return `${this.ESC})<`
  }

  /**
   * Sets G1 character set to UK.
   * @returns G1 UK character set sequence
   */
  static setG1_UK(): string {
    return `${this.ESC})A`
  }

  /**
   * Sets G1 character set to US ASCII.
   * @returns G1 US ASCII character set sequence
   */
  static setG1_USASCII(): string {
    return `${this.ESC})B`
  }

  /**
   * Sets G2 character set to DEC Special Graphics.
   * @returns G2 DEC Special Graphics character set sequence
   */
  static setG2_DECSpecial(): string {
    return `${this.ESC}*0`
  }

  /**
   * Sets G2 character set to US ASCII.
   * @returns G2 US ASCII character set sequence
   */
  static setG2_USASCII(): string {
    return `${this.ESC}*B`
  }

  /**
   * Sets G3 character set to DEC Special Graphics.
   * @returns G3 DEC Special Graphics character set sequence
   */
  static setG3_DECSpecial(): string {
    return `${this.ESC}+0`
  }

  /**
   * Sets G3 character set to US ASCII.
   * @returns G3 US ASCII character set sequence
   */
  static setG3_USASCII(): string {
    return `${this.ESC}+B`
  }

  /**
   * Writes G0 character set sequence to stdout.
   * @param charset - Character set to set
   * @returns Promise that resolves when sequence is written
   */
  static async writeG0(charset: CharsetType): Promise<void> {
    const sequences = {
      USASCII: this.setG0_USASCII(),
      UK: this.setG0_UK(),
      DECSpecial: this.setG0_DECSpecial(),
      DECSupplemental: this.setG0_DECSupplemental()
    }
    await Deno.stdout.write(new TextEncoder().encode(sequences[charset]))
  }

  /**
   * Writes G1 character set sequence to stdout.
   * @param charset - Character set to set
   * @returns Promise that resolves when sequence is written
   */
  static async writeG1(charset: CharsetType): Promise<void> {
    const sequences = {
      USASCII: this.setG1_USASCII(),
      UK: this.setG1_UK(),
      DECSpecial: this.setG1_DECSpecial(),
      DECSupplemental: this.setG1_DECSupplemental()
    }
    await Deno.stdout.write(new TextEncoder().encode(sequences[charset]))
  }

  /**
   * Writes G2 character set sequence to stdout.
   * @param charset - Character set to set
   * @returns Promise that resolves when sequence is written
   */
  static async writeG2(charset: CharsetTypeG2G3): Promise<void> {
    const sequences = {
      USASCII: this.setG2_USASCII(),
      DECSpecial: this.setG2_DECSpecial()
    }
    await Deno.stdout.write(new TextEncoder().encode(sequences[charset]))
  }

  /**
   * Writes G3 character set sequence to stdout.
   * @param charset - Character set to set
   * @returns Promise that resolves when sequence is written
   */
  static async writeG3(charset: CharsetTypeG2G3): Promise<void> {
    const sequences = {
      USASCII: this.setG3_USASCII(),
      DECSpecial: this.setG3_DECSpecial()
    }
    await Deno.stdout.write(new TextEncoder().encode(sequences[charset]))
  }
}
