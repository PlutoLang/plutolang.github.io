Must be included via `require`.

### `http.request`
Performs an HTTP request.
#### Parameters
1. The URL to send a request to as a string. This parameter is optional in the sense that the options table (parameter 2) can be parameter 1 instead, but must have the "url" option then.
2. The table of options. This parameter is optional if a URL was given.
#### Options
- **method:** The HTTP request method to use. Defaults to GET.
- **headers:** A table of headers, e.g. `{ ["Content-Type"] = "application/json" }`.
- **body:** An optional request payload. If provided, the `Content-Length` header is set appropriately, and the method is set to POST unless otherwise specified.
- **prefer_ipv6:** (Does nothing in WASM builds of Pluto.) When establishing a new connection, we attempt to lookup and connect via IPv4, retrying with IPv6 if needed. If this is set to true, we instead start with IPv6. This should not be needed for 99% of use cases.
#### Returns
On success:
1. The response body as a string.
2. The status code as an integer.
3. A table of response headers. Empty in WASM builds of Pluto.
4. The status text as a string.

On failure:
1. Nil.
2. An approximate failure reason as an English string. Not available in WASM builds of Pluto.
#### Multitasking
If called inside of a coroutine, this function yields. Otherwise, it blocks. In WASM builds of Pluto, it must be called inside of a coroutine that yields to the environment as otherwise the request cannot be dispatched.
:::info
The first request to a remote may take a while — especially with HTTPS — due to the TCP and TLS handshakes. We use keep-alive to keep the connection open, so subsequent requests to the same remote will be significantly faster.
:::
```pluto
local http = require "pluto:http"
local body, status_code, headers, status_text = http.request("https://httpbin.org/anything")
print(status_code.." "..status_text)
if os.platform != "wasm" then
    print(dumpvar(headers))
end
print(body)
```
#### [Try It Yourself](https://pluto-lang.org/web/#code=local%20http%20%3D%20require%20%22pluto%3Ahttp%22%0D%0Alocal%20body%2C%20status_code%2C%20headers%2C%20status_text%20%3D%20http.request(%22https%3A%2F%2Fhttpbin.org%2Fanything%22)%0D%0Aprint(status_code..%22%20%22..status_text)%0D%0Aif%20os.platform%20!%3D%20%22wasm%22%20then%0D%0A%20%20%20%20print(dumpvar(headers))%0D%0Aend%0D%0Aprint(body))
