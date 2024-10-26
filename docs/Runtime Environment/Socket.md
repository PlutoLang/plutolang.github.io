---
sidebar_position: 3
---
Must be included via `require`. This library is not available in WASM builds of Pluto.

---
### `socket.connect`
Establishes a TCP connection.
#### Parameters
1. The host to connect to. Either an IPv4 or IPv6 address, or a domain name resolving to one.
2. The port to contact the host on.
#### Returns
A socket instance on success. Nil on failure.
#### Multitasking
If called inside of a coroutine, this function yields. Otherwise, it blocks.

---
### `socket.listen`
Creates a new listener for the given port.
#### Parameters
1. The port to listen on.
#### Returns
A listener instance on success. Nil on failure.

---
### `socket.bind`
A convenience function that wraps `socket.listen`, automatically accepting new clients and spinning up a coroutine for them.
#### Parameters
1. A [scheduler](Scheduler) instance.
2. The port to listen on.
3. The callback function that will be called in a new coroutine for each client socket.
```pluto norun
local { scheduler, socket } = require "*"

local sched = new scheduler()
socket.bind(sched, 80, |s| -> do
    local content = "Hello, world!"
    s:send("HTTP/1.1 200 OK\r\nConnection: Close\r\nContent-Length: "..#content.."\r\n\r\n"..content)
end)
sched:run()
```

---
## Socket Class
Socket instances are obtained by calling `socket.connect` (client), or from a listener (server).
### `socket.send`
Sends data on a socket.
#### Parameters
1. The socket instance.
2. The data to send.

### `socket.recv`
Receive data from a socket.
#### Parameters
1. The socket instance.
#### Returns
- If the socket is open: The oldest chunk of data received on the transport layer (TCP packet) or crypto layer (TLS record) as a string.
- If the socket is closed: Nil.
#### Multitasking
If a message is buffered, the function can return immediately. If not, it will yield if inside a coroutine, and block otherwise.
```pluto norun
local socket = require "pluto:socket"

local s = socket.connect("google.com", 80)
s:send("GET / HTTP/1.1\r\nHost: google.com\r\n\r\n")
print(s:recv())
```

### `socket.peek`
Look at received data without consuming it.
#### Parameters
1. The socket instances.
#### Returns
Either the string that would be returned next by `socket.recv` or nothing if there is no message in the receive buffer.

### `socket.unrecv`
Pushes a chunk of data to the front of the receive buffer, making it oldest for the purposes of `socket.recv`.
#### Parameters
1. The socket instance.
2. The data to push.
```pluto norun
local socket = require "pluto:socket"

local sock = socket.connect("google.com", 80)
sock:unrecv("World")
sock:unrecv("Hello")
print(sock:recv()) --> Hello
print(sock:recv()) --> World
```

### `socket.starttls`
Attempts to add the TLS crypto layer to the socket, making the transport layer a sole carrier for TLS traffic.
#### Parameters (Client)
1. The socket instance.
2. The host name of the intended remote. This may be the same as what was passed to `socket.connect`. This name must be on the certificate that the remote will send.
#### Parameters (Server)
1. The socket instance.
2. An array of tables describing available certificates. Each certificate needs a `chain` and `private_key` field, which should be a string containing valid PEM. The `private_key` must be RSA.
#### Returns
True on success. On failure, returns false and the socket is closed. If the socket is already using TLS, returns nil.
#### Multitasking
If called inside of a coroutine, this function yields. Otherwise, it blocks.
```pluto norun title="Client Example"
local socket = require "pluto:socket"

local s = socket.connect("pluto-lang.org", 443)
assert(s:starttls("pluto-lang.org"), "Failed to establish secure connection.")
s:send("GET / HTTP/1.1\r\nHost: pluto-lang.org\r\nConnection: close\r\n\r\n")
while data := s:recv() do
    print(data)
end
```
```pluto norun title="Server Example"
local { http, scheduler, socket } = require "*"

local certs = {
    {
        chain = http.request("https://tls.cat/certs/viatls-2024/cert.pem"),
        private_key = http.request("https://tls.cat/certs/viatls-2024/key.pem"),
    }
}

local sched = new scheduler()
socket.bind(sched, 443, |s| -> do
    if s:starttls(certs) then
        local content = "Hello, world!"
        s:send("HTTP/1.1 200 OK\r\nConnection: Close\r\nContent-Length: "..#content.."\r\n\r\n"..content)
    end
end)
print("https://127-0-0-1.viatls.com/")
sched:run()
```

### `socket.close`
Closes a socket.
#### Parameters
1. The socket instance.

### `socket.getpeer`
Get information about the other end of a connection.
#### Parameters
1. The socket instance.
#### Returns
1. The IP address as a string.
2. The port.
```pluto norun
local sock = require"socket".connect("1.1.1.1", 443)
local ip, port = sock:getpeer()
print(ip) --> 1.1.1.1
print(port) --> 443
```

### `socket.getside`
Get which side of the connection a socket is.
#### Parameters
1. The socket instance.
#### Returns
Either "client" or "server".
```pluto norun
local sock = require"socket".connect("1.1.1.1", 443)
print(sock:getside()) --> client
```

---
## Listener Class
Listener instances are obtained by calling `socket.listen`.
### `accept`
Accepts an incoming client connection, waiting until there is one.
#### Returns
A new socket instance. The socket can be used as per usual, with the exception of the starttls function being unavailable.
#### Multitasking
- If there is an incoming client connection, this function returns immediately.
- If there is not, it waits for one. Waiting means yielding if called inside a coroutine, and blocking otherwise.
### `hasconnection`
Checks if there is an incoming client connection. If this function returns true, the next call to `accept` is guaranteed not to block or yield.
```pluto norun
local socket = require "pluto:socket"

local l = socket.listen(80) or error("Failed to bind TCP/80")
while not l:hasconnection() do -- Visit http://localhost to break this loop
    os.sleep(1)
end
print(l:accept():recv())
```
