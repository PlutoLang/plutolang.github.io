---
sidebar_position: 3
---
Must be included via `require`.

---
### `canvas.new`
Creates a new canvas instance.
#### Parameters
1. Width.
2. Height.

---
### `canvas.bmp`
Creates a new canvas instance based on a BMP image.
#### Parameters
1. The BMP image as a string.

---
### `canvas.qrcode`
Creates a new canvas instance containing a QR code.
#### Parameters
1. The string to be encoded.
2. An optional table of options.
#### Options
- "ecl" specifies the error correction level between "low", "medium", "quartile", "high". defaults to "low".
- "border" specifies the number of pixels around the QR code. defaults to 0.
- "bg" specifies the background color. defaults to `0x000000` for black.
- "fg" specifies the background color. defaults to `0xffffff` for white.

```pluto
local canvas = require "canvas"
local c = canvas.qrcode("Hello from Pluto!", { fg = 0xffffff, bg = 0x000000 })
print(c:tobwstring(0xffffff))
--> █▀▀▀▀▀█ ▄ █▄▄ █▀▀▀▀▀█
--> █ ███ █ ▄█▄▄█ █ ███ █
--> █ ▀▀▀ █ ▄▀ █▄ █ ▀▀▀ █
--> ▀▀▀▀▀▀▀ ▀▄▀▄█ ▀▀▀▀▀▀▀
--> ▀▀███ ▀███ █▀▀ ▀▄█▄▀▄
--> █▄▀▄▀█▀█▀▀ ▀█▄▀▄▄██▀ 
--> ▀▀▀▀▀ ▀ █▀█▀ ▄█▄▄▄  ▀
--> █▀▀▀▀▀█ ▀  ▀██▀▄ ▄██ 
--> █ ███ █ █▄ ▄█▄██▄▄ ▄ 
--> █ ▀▀▀ █ █▄ ▀█▀ ▀▄▄█  
--> ▀▀▀▀▀▀▀ ▀   ▀ ▀ ▀  ▀ 
```

---
### `canvas.get`
Gets the color of the pixel at the given coordinates.
#### Parameters
1. The canvas instance.
2. The X coordinate.
3. The Y coordinate.
#### Returns
The color as an integer.

---
### `canvas.set`
Sets the color of the pixel at the given coordinates.
#### Parameters
1. The canvas instance.
2. The X coordinate.
3. The Y coordinate.
4. The color as an integer.

---
### `canvas.fill`
Sets every pixel to the given color.
#### Parameters
1. The canvas instance.
2. The color as an integer.

---
### `canvas.size`
Get the size of a canvas.
#### Parameters
1. The canvas instance.
#### Returns
1. Width.
1. Height.

---
### `canvas.mulsize`
Multiplies the size of a canvas.
#### Parameters
1. The canvas instance.
2. The multiplier. Must be 2 or higher.

---
### `canvas.tobmp`
Convert a canvas to a BMP image.
#### Parameters
1. The canvas instance.
#### Returns
A string.

---
### `canvas.topng`
Convert a canvas to a PNG image.
#### Parameters
1. The canvas instance.
#### Returns
A string.
```pluto
local { base64, canvas } = require "*"
local c = new canvas(5, 5)
c:fill(0xff0000)
print("data:image/png;base64,"..base64.encode(c:topng()))
--> data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAIAAAACDbGyAAAAW0lEQVQIHQFQAK//AP8AAP8AAP8AAP8AAP8AAAD/AAD/AAD/AAD/AAD/AAAA/wAA/wAA/wAA/wAA/wAAAP8AAP8AAP8AAP8AAP8AAAD/AAD/AAD/AAD/AAD/AAD9fBjo3iScjwAAAABJRU5ErkJggg==
```

---
### `canvas.tobwstring`
Convert a canvas to a black and white unicode string.
#### Parameters
1. The canvas instance.
2. The color to be "white." Any other color will be "black."
#### Returns
A string.
