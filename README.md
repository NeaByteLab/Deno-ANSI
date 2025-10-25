# Deno ANSI [![License: MIT](https://img.shields.io/badge/License-MIT-red.svg)](LICENSE) [![Deno](https://img.shields.io/badge/Deno-2.5.4-blue)](https://deno.land) [![JSR](https://jsr.io/badges/@neabyte/deno-ansi)](https://jsr.io/@neabyte/deno-ansi)

ANSI escape sequences for Deno. Clean, fast, feature-rich terminal control.

## Installation

```bash
deno add jsr:@neabyte/deno-ansi
```

## Basic Usage

```typescript
import { Colors, Cursor, Terminal } from '@neabyte/deno-ansi'

// Colors
console.log(Colors.red('Hello') + Colors.bold(' World'))

// Cursor control
await Cursor.moveTo(10, 5)
await Cursor.setCursorVisible(false)

// Terminal control
await Terminal.clearScreen()
await Terminal.setWindowTitle('My App')
```

## Method Reference

### Colors Class

| Method | Description |
|--------|-------------|
| `Colors.black(text)` | Apply black foreground color |
| `Colors.red(text)` | Apply red foreground color |
| `Colors.green(text)` | Apply green foreground color |
| `Colors.yellow(text)` | Apply yellow foreground color |
| `Colors.blue(text)` | Apply blue foreground color |
| `Colors.magenta(text)` | Apply magenta foreground color |
| `Colors.cyan(text)` | Apply cyan foreground color |
| `Colors.white(text)` | Apply white foreground color |
| `Colors.brightBlack(text)` | Apply bright black foreground color |
| `Colors.brightRed(text)` | Apply bright red foreground color |
| `Colors.brightGreen(text)` | Apply bright green foreground color |
| `Colors.brightYellow(text)` | Apply bright yellow foreground color |
| `Colors.brightBlue(text)` | Apply bright blue foreground color |
| `Colors.brightMagenta(text)` | Apply bright magenta foreground color |
| `Colors.brightCyan(text)` | Apply bright cyan foreground color |
| `Colors.brightWhite(text)` | Apply bright white foreground color |
| `Colors.fg(text, color)` | Apply foreground color |
| `Colors.bg(text, color)` | Apply background color |
| `Colors.fgBg(text, fgColor, bgColor)` | Apply both foreground and background colors |
| `Colors.color256(text, colorId)` | Apply 256-color foreground |
| `Colors.bg256(text, colorId)` | Apply 256-color background |
| `Colors.rgb(text, r, g, b)` | Apply RGB foreground color |
| `Colors.bgRgb(text, r, g, b)` | Apply RGB background color |
| `Colors.bold(text)` | Apply bold style |
| `Colors.dim(text)` | Apply dim style |
| `Colors.italic(text)` | Apply italic style |
| `Colors.underline(text)` | Apply underline style |
| `Colors.doubleUnderline(text)` | Apply double underline style |
| `Colors.blink(text)` | Apply blink effect |
| `Colors.inverse(text)` | Apply inverse style |
| `Colors.hidden(text)` | Apply hidden style |
| `Colors.strikethrough(text)` | Apply strikethrough style |
| `Colors.overline(text)` | Apply overline style |
| `Colors.framed(text)` | Apply framed style |
| `Colors.encircled(text)` | Apply encircled style |
| `Colors.proportionalSpacing(text)` | Apply proportional spacing |
| `Colors.style(text, ...styles)` | Apply multiple styles |
| `Colors.hyperlink(text, url)` | Create hyperlink |
| `Colors.reset()` | Return ANSI reset sequence |
| `Colors.resetDoubleUnderline()` | Reset double underline |
| `Colors.resetFramedEncircled()` | Reset framed and encircled styles |
| `Colors.resetOverline()` | Reset overline |

### Cursor Class

| Method | Description |
|--------|-------------|
| `Cursor.home()` | Move cursor to home position |
| `Cursor.moveTo(x, y)` | Move cursor to specific coordinates |
| `Cursor.moveUp(n)` | Move cursor up by n lines |
| `Cursor.moveDown(n)` | Move cursor down by n lines |
| `Cursor.moveLeft(n)` | Move cursor left by n columns |
| `Cursor.moveRight(n)` | Move cursor right by n columns |
| `Cursor.moveToColumn(n)` | Move cursor to specific column |
| `Cursor.moveToNextLine(n)` | Move cursor to beginning of next line |
| `Cursor.moveToPrevLine(n)` | Move cursor to beginning of previous line |
| `Cursor.requestPosition()` | Request cursor position from terminal |
| `Cursor.save()` | Save cursor position to save buffer |
| `Cursor.restore()` | Restore cursor position from save buffer |
| `Cursor.saveSCO()` | Save cursor position using SCO sequence |
| `Cursor.restoreSCO()` | Restore cursor position using SCO sequence |
| `Cursor.scrollUp()` | Scroll screen up |
| `Cursor.setCursorVisible(visible)` | Set cursor visibility |
| `Cursor.setCursorBlinking(blinking)` | Set cursor blinking state |
| `Cursor.setCursorShape(shape)` | Set cursor shape |

### Terminal Class

| Method | Description |
|--------|-------------|
| `Terminal.clearScreen()` | Clear entire screen |
| `Terminal.clearAll()` | Clear entire screen and saved lines |
| `Terminal.clearToEnd()` | Clear from cursor to end of screen |
| `Terminal.clearToBeginning()` | Clear from cursor to beginning of screen |
| `Terminal.clearSavedLines()` | Clear saved lines buffer |
| `Terminal.clearLine()` | Clear entire current line |
| `Terminal.clearLineToEnd()` | Clear from cursor to end of line |
| `Terminal.clearLineToBeginning()` | Clear from cursor to beginning of line |
| `Terminal.setWindowTitle(title)` | Set window title |
| `Terminal.resetWindowTitle()` | Reset window title |
| `Terminal.setIconName(name)` | Set icon name |
| `Terminal.resetIconName()` | Reset icon name |
| `Terminal.saveScreen()` | Save current screen |
| `Terminal.restoreScreen()` | Restore saved screen |
| `Terminal.enableAltBuffer()` | Enable alternate buffer |
| `Terminal.disableAltBuffer()` | Disable alternate buffer |
| `Terminal.setTabStop()` | Set tab stop at current cursor position |
| `Terminal.clearTabStop()` | Clear tab stop at current cursor position |
| `Terminal.clearAllTabStops()` | Clear all tab stops |
| `Terminal.getSize()` | Get terminal size |
| `Terminal.hideCursor()` | Hide cursor |
| `Terminal.showCursor()` | Show cursor |
| `Terminal.write(text)` | Write text to stdout |
| `Terminal.writeln(text)` | Write text to stdout with newline |
| `Terminal.reset()` | Reset all terminal attributes |
| `Terminal.requestDeviceAttributes()` | Request device attributes from terminal |
| `Terminal.parseCursorPosition(input)` | Parse cursor position response |
| `Terminal.parseDeviceAttributes(input)` | Parse device attributes response |

### Terminal Mode Control

| Method | Description |
|--------|-------------|
| `Terminal.enable132ColumnMode()` | Enable 132 column mode |
| `Terminal.disable132ColumnMode()` | Disable 132 column mode |
| `Terminal.enableANSIVT52Mode()` | Enable ANSI/VT52 mode |
| `Terminal.disableANSIVT52Mode()` | Disable ANSI/VT52 mode |
| `Terminal.enableApplicationCursorKeys()` | Enable application cursor keys mode |
| `Terminal.disableApplicationCursorKeys()` | Disable application cursor keys mode |
| `Terminal.enableAutoRepeatMode()` | Enable auto-repeat mode |
| `Terminal.disableAutoRepeatMode()` | Disable auto-repeat mode |
| `Terminal.enableBracketedPaste()` | Enable bracketed paste mode |
| `Terminal.disableBracketedPaste()` | Disable bracketed paste mode |
| `Terminal.enableFocusEvents()` | Enable focus events reporting |
| `Terminal.disableFocusEvents()` | Disable focus events reporting |
| `Terminal.enableInsertMode()` | Enable insert mode |
| `Terminal.disableInsertMode()` | Disable insert mode |
| `Terminal.enableLineWrapping()` | Enable line wrapping |
| `Terminal.disableLineWrapping()` | Disable line wrapping |
| `Terminal.enableMouseHighlight()` | Enable mouse highlight tracking |
| `Terminal.disableMouseHighlight()` | Disable mouse highlight tracking |
| `Terminal.enableOriginMode()` | Enable origin mode |
| `Terminal.disableOriginMode()` | Disable origin mode |
| `Terminal.enableSmoothScrolling()` | Enable smooth scrolling mode |
| `Terminal.disableSmoothScrolling()` | Disable smooth scrolling mode |

### Terminal Display Modes

| Method | Description |
|--------|-------------|
| `Terminal.setMode40x25Color()` | Set 40x25 color mode |
| `Terminal.resetMode40x25Color()` | Reset 40x25 color mode |
| `Terminal.setMode40x25Mono()` | Set 40x25 monochrome mode |
| `Terminal.resetMode40x25Mono()` | Reset 40x25 monochrome mode |
| `Terminal.setMode80x25Color()` | Set 80x25 color mode |
| `Terminal.resetMode80x25Color()` | Reset 80x25 color mode |
| `Terminal.setMode80x25Mono()` | Set 80x25 monochrome mode |
| `Terminal.resetMode80x25Mono()` | Reset 80x25 monochrome mode |
| `Terminal.setMode320x200Color()` | Set 320x200 color mode |
| `Terminal.resetMode320x200Color()` | Reset 320x200 color mode |
| `Terminal.setMode320x200Mono()` | Set 320x200 monochrome mode |
| `Terminal.resetMode320x200Mono()` | Reset 320x200 monochrome mode |
| `Terminal.setMode320x200_4Color()` | Set 320x200 4-color mode |
| `Terminal.resetMode320x200_4Color()` | Reset 320x200 4-color mode |
| `Terminal.setMode320x200_256Color()` | Set 320x200 256-color mode |
| `Terminal.resetMode320x200_256Color()` | Reset 320x200 256-color mode |
| `Terminal.setMode640x200Mono()` | Set 640x200 monochrome mode |
| `Terminal.resetMode640x200Mono()` | Reset 640x200 monochrome mode |
| `Terminal.setMode640x200_16Color()` | Set 640x200 16-color mode |
| `Terminal.resetMode640x200_16Color()` | Reset 640x200 16-color mode |
| `Terminal.setMode640x350Mono()` | Set 640x350 monochrome mode |
| `Terminal.resetMode640x350Mono()` | Reset 640x350 monochrome mode |
| `Terminal.setMode640x350_16Color()` | Set 640x350 16-color mode |
| `Terminal.resetMode640x350_16Color()` | Reset 640x350 16-color mode |
| `Terminal.setMode640x480Mono()` | Set 640x480 monochrome mode |
| `Terminal.resetMode640x480Mono()` | Reset 640x480 monochrome mode |
| `Terminal.setMode640x480_16Color()` | Set 640x480 16-color mode |
| `Terminal.resetMode640x480_16Color()` | Reset 640x480 16-color mode |

### Control Class

| Method | Description |
|--------|-------------|
| `Control.bell()` | Return bell/alert character |
| `Control.backspace()` | Return backspace character |
| `Control.tab()` | Return horizontal tab character |
| `Control.lineFeed()` | Return line feed character |
| `Control.formFeed()` | Return form feed character |
| `Control.carriageReturn()` | Return carriage return character |
| `Control.ringBell()` | Write bell character to stdout |
| `Control.writeBackspace()` | Write backspace character to stdout |
| `Control.writeTab()` | Write tab character to stdout |
| `Control.writeLineFeed()` | Write line feed character to stdout |
| `Control.writeFormFeed()` | Write form feed character to stdout |
| `Control.writeCarriageReturn()` | Write carriage return character to stdout |

### Input Class

| Method | Description |
|--------|-------------|
| `Input.enableRawMode()` | Enable raw mode for stdin |
| `Input.disableRawMode()` | Disable raw mode for stdin |
| `Input.readChar()` | Read a single character from stdin |
| `Input.readKey()` | Read a key from stdin, parsing escape sequences |
| `Input.waitForAnyKey()` | Wait for any key press |
| `Input.waitForKey(expectedKey)` | Wait for a specific key press |

### Mouse Class

| Method | Description |
|--------|-------------|
| `Mouse.enableTracking()` | Enable basic mouse tracking |
| `Mouse.disableTracking()` | Disable basic mouse tracking |
| `Mouse.enableDragTracking()` | Enable mouse drag tracking |
| `Mouse.disableDragTracking()` | Disable mouse drag tracking |
| `Mouse.enableMoveTracking()` | Enable mouse move tracking |
| `Mouse.disableMoveTracking()` | Disable mouse move tracking |
| `Mouse.enableSGRMode()` | Enable SGR mouse mode |
| `Mouse.disableSGRMode()` | Disable SGR mouse mode |
| `Mouse.enableSGRTracking()` | Enable SGR tracking mode |
| `Mouse.enableSGRDragTracking()` | Enable SGR drag tracking mode |
| `Mouse.enableSGRMoveTracking()` | Enable SGR move tracking mode |
| `Mouse.enableAllTracking()` | Enable all mouse tracking modes |
| `Mouse.disableAllTracking()` | Disable all mouse tracking modes |
| `Mouse.parseMouseEvent(input)` | Parse basic mouse event from input |
| `Mouse.parseSGREvent(input)` | Parse SGR mouse event from input |

### Charsets Class

| Method | Description |
|--------|-------------|
| `Charsets.selectCharacterSet(set)` | Select character set (G0, G1, G2, G3) |
| `Charsets.selectG0()` | Select G0 character set |
| `Charsets.selectG1()` | Select G1 character set |
| `Charsets.selectG2()` | Select G2 character set |
| `Charsets.selectG3()` | Select G3 character set |
| `Charsets.setG0_USASCII()` | Set G0 to US ASCII |
| `Charsets.setG0_UK()` | Set G0 to UK |
| `Charsets.setG0_DECSpecial()` | Set G0 to DEC Special Graphics |
| `Charsets.setG0_DECSupplemental()` | Set G0 to DEC Supplemental Graphics |
| `Charsets.setG1_USASCII()` | Set G1 to US ASCII |
| `Charsets.setG1_UK()` | Set G1 to UK |
| `Charsets.setG1_DECSpecial()` | Set G1 to DEC Special Graphics |
| `Charsets.setG1_DECSupplemental()` | Set G1 to DEC Supplemental Graphics |
| `Charsets.setG2_USASCII()` | Set G2 to US ASCII |
| `Charsets.setG2_DECSpecial()` | Set G2 to DEC Special Graphics |
| `Charsets.setG3_USASCII()` | Set G3 to US ASCII |
| `Charsets.setG3_DECSpecial()` | Set G3 to DEC Special Graphics |
| `Charsets.applyG0(text, charset)` | Apply G0 character set to text |
| `Charsets.applyG1(text, charset)` | Apply G1 character set to text |
| `Charsets.applyG2(text, charset)` | Apply G2 character set to text |
| `Charsets.applyG3(text, charset)` | Apply G3 character set to text |
| `Charsets.writeG0(charset)` | Write G0 character set sequence to stdout |
| `Charsets.writeG1(charset)` | Write G1 character set sequence to stdout |
| `Charsets.writeG2(charset)` | Write G2 character set sequence to stdout |
| `Charsets.writeG3(charset)` | Write G3 character set sequence to stdout |

### Extensions Class

| Method | Description |
|--------|-------------|
| `Extensions.detectTerminalExtension()` | Detect terminal extension based on environment |
| `Extensions.iTerm2DisplayImage(path, name)` | Display image in iTerm2 |
| `Extensions.iTerm2SetBackgroundColor(color)` | Set iTerm2 background color |
| `Extensions.iTerm2SetBadge(format)` | Set iTerm2 badge format |
| `Extensions.iTerm2SetCursorColor(color)` | Set iTerm2 cursor color |
| `Extensions.iTerm2SetProfile(profile)` | Set iTerm2 profile |
| `Extensions.iTerm2SetTabTitle(title)` | Set iTerm2 tab title |
| `Extensions.iTerm2SetWindowTitle(title)` | Set iTerm2 window title |
| `Extensions.konsoleSetIconName(name)` | Set Konsole icon name |
| `Extensions.konsoleSetProfile(profile)` | Set Konsole profile |
| `Extensions.konsoleSetTitle(title)` | Set Konsole title |
| `Extensions.vteSetHyperlink(uri, text)` | Set VTE hyperlink |
| `Extensions.vteSetIconName(name)` | Set VTE icon name |
| `Extensions.vteSetTitle(title)` | Set VTE title |
| `Extensions.xtermSetBackgroundColor(color)` | Set xterm background color |
| `Extensions.xtermSetForegroundColor(color)` | Set xterm foreground color |
| `Extensions.xtermSetFont(font)` | Set xterm font |
| `Extensions.xtermSetIconName(name)` | Set xterm icon name |
| `Extensions.xtermSetTitle(title)` | Set xterm title |
| `Extensions.setIconName(extension, name)` | Set icon name for specified terminal |
| `Extensions.setTitle(extension, title)` | Set title for specified terminal |

### Printer Class

| Method | Description |
|--------|-------------|
| `Printer.enablePrinter()` | Enable printer port |
| `Printer.disablePrinter()` | Disable printer port |
| `Printer.printScreen()` | Print current screen contents |
| `Printer.printLine()` | Print current line |
| `Printer.setPrinterMode(mode)` | Control printer mode |

### VT100 Class

| Method | Description |
|--------|-------------|
| `VT100.enableDoubleWidth()` | Enable double-width characters |
| `VT100.disableDoubleWidth()` | Disable double-width characters |
| `VT100.enableDoubleHeight()` | Enable double-height characters |
| `VT100.disableDoubleHeight()` | Disable double-height characters |
| `VT100.enableDoubleWidthHeight()` | Enable double-width and double-height characters |
| `VT100.disableDoubleWidthHeight()` | Disable double-width and double-height characters |
| `VT100.enableSoftFonts()` | Enable soft fonts |
| `VT100.disableSoftFonts()` | Disable soft fonts |
| `VT100.enableFeature(feature)` | Enable specified VT100 feature |
| `VT100.disableFeature(feature)` | Disable specified VT100 feature |

## Contributing

Contributions are welcome! Please feel free to submit a [Pull Request](https://github.com/NeaByteLab/Deno-ANSI/pulls).

## License

This project is licensed under the MIT license. See the [LICENSE](LICENSE) file for more info.
