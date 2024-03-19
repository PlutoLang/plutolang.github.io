---
sidebar_position: 3
---
Must be included via `require`. This library is not available in WASM builds of Pluto.

### `socket.connect`
Establishes a TCP connection.
#### Parameters
1. The host to connect to. Either an IPv4 or IPv6 address, or a domain name resolving to one.
2. The port to contact the host on.
#### Returns
A socket instance on success, or nil on failure.
#### Multitasking
If called inside of a coroutine, this function yields. Otherwise, it blocks.

### `socket.send`
Sends data on a socket.
#### Parameters
1. The socket instance.
2. The data to send.

### `socket.recv`
Returns the oldest chunk of data received on the transport layer (TCP packet) or crypto layer (TLS record).
#### Parameters
1. The socket instance.
#### Multitasking
If a message is buffered, the function can return immediately. If not, it will yield if inside a coroutine, and block otherwise.
```pluto
local socket = require "pluto:socket"

local s = socket.connect("google.com", 80)
s:send("GET / HTTP/1.1\r\nHost: google.com\r\n\r\n")
print(s:recv())
```

### `socket.unrecv`
Pushes a chunk of data to the front of the receive buffer, making it oldest for the purposes of `socket.recv`.
#### Parameters
1. The socket instance.
2. The data to push.
```pluto
local socket = require "pluto:socket"

local sock = socket.connect("google.com", 80)
sock:unrecv("World")
sock:unrecv("Hello")
print(sock:recv()) --> Hello
print(sock:recv()) --> World
```

### `socket.starttls`
Attempts to add the TLS crypto layer to the socket, making the transport layer a sole carrier for TLS traffic.
#### Parameters
1. The socket instance.
2. The host name of the intended remote. This may be the same as what was passed to `socket.connect`. This name must be on the certificate that the remote will send.
#### Returns
True on success. On failure, returns false and the socket is closed. If the socket is already using TLS, returns nil.
#### Multitasking
If called inside of a coroutine, this function yields. Otherwise, it blocks.
```pluto
local socket = require "pluto:socket"

local s = socket.connect("pluto-lang.org", 443)
assert(s:starttls("pluto-lang.org"), "Failed to establish secure connection.")
s:send("GET / HTTP/1.1\r\nHost: pluto-lang.org\r\nConnection: close\r\n\r\n")
while data := s:recv() do
    print(data)
end
```
