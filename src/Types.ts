/**
 * Character set names for terminal character encoding.
 */
export type CharsetName = 'G0' | 'G1' | 'G2' | 'G3'

/**
 * Character set types for terminal character encoding.
 */
export type CharsetType = 'USASCII' | 'UK' | 'DECSpecial' | 'DECSupplemental'

/**
 * Character set types for G2 and G3 character sets.
 */
export type CharsetTypeG2G3 = 'USASCII' | 'DECSpecial'

/**
 * Cursor position coordinates.
 */
export type CursorPosition = {
  /** Row position (0-based) */
  row: number
  /** Column position (0-based) */
  col: number
}

/**
 * Cursor shape types for terminal display.
 */
export type CursorShape =
  | 'block'
  | 'underline'
  | 'bar'
  | 'blinking-block'
  | 'blinking-underline'
  | 'blinking-bar'

/**
 * DEC private mode types for terminal control.
 */
export type DECPrivateMode =
  | 'DECCOLM'
  | 'DECSCLM'
  | 'DECOM'
  | 'DECAWM'
  | 'DECARM'
  | 'DECIM'
  | 'DECKAM'
  | 'DECCKM'
  | 'DECANM'

/**
 * Device attributes information.
 */
export type DeviceAttributes = {
  /** Device type identifier */
  type: string
  /** Device version string */
  version: string
}

/**
 * Mouse event data structure.
 */
export type MouseEventData = {
  /** Type of mouse event */
  type: MouseEventType
  /** Mouse button number */
  button: number
  /** X coordinate position */
  x: number
  /** Y coordinate position */
  y: number
}

/**
 * Mouse event types.
 */
export type MouseEventType = 'click' | 'drag' | 'press' | 'release'

/**
 * Mouse SGR event data structure.
 */
export type MouseSGREventData = {
  /** Type of mouse event */
  type: MouseEventType
  /** Mouse button number */
  button: number
  /** X coordinate position */
  x: number
  /** Y coordinate position */
  y: number
  /** Modifier keys pressed during the event */
  modifiers: number
}

/**
 * Printer control types for printer port management.
 */
export type PrinterMode = 'enable' | 'disable' | 'print-screen'

/**
 * Terminal extension types for specific terminal emulators.
 */
export type TerminalExtension = 'iTerm2' | 'Konsole' | 'VTE' | 'xterm'

/**
 * VT100/VT220 feature types for advanced terminal capabilities.
 */
export type VT100Feature = 'double-width' | 'double-height' | 'double-width-height' | 'soft-fonts'
