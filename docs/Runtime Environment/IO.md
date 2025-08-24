This page documents the changes & additions to the `io` library in Pluto, which is built on top of Lua 5.4's.

To improve cross-platform consistency, all IO functions assume UTF-8 encoding for paths.

---
### `io.rename`
A variant of Lua's `os.rename` that raises an error on failure and instead has no return values.

---
### `io.remove`
A variant of Lua's `os.remove` that raises an error on failure and instead has no return values.

---
### `io.copy`
Copy a file to another file, creating a new file if needed.
#### Parameters
1. A string path or file stream.
2. A path towards the file to copy into.
#### Errors
Raises a Lua error if the copy operation fails.

---
### `io.part`
Extracts the parts of a path.
#### Parameters
1. A string path or file stream.
2. Optionally, which part to return, "parent" or "name".
#### Returns
The extracted part(s) of the path.
```pluto
print(io.part("/path/to/foo.txt")) -- "/path/to", "foo.txt"
print(io.part("/path/to/foo.txt", "parent")) -- "/path/to"
print(io.part("/path/to/foo.txt", "name")) -- "foo.txt"
```
---
### `io.isdir`
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led toward a directory.
```pluto
local path = "./dir/main/"
local bool = io.isdir(path)
if bool then
    print("Directory!")
else
    print("Not a directory!")
end
```
---
### `io.isfile`
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led towards a file.
```pluto
local path = "./isfile/file"
local bool = io.isfile(path)
if bool then
    print("File!")
else
    print("Not a file!")
end
```
---
### `io.exists`
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led towards an existing file or directory.
```pluto
if io.exists("cfg/config.txt") then
    print("Config exists!")
else
    print("Config does not exist!")
end
```
---
### `io.makedir`, `io.mkdir`
Create a directory.
#### Parameters
1. The path for the new directory.
#### Returns
A boolean indicating if the directory was successfully created.
```pluto
if io.makedir("./cfg") then
    print("Created cfg directory.")
else
    print("Failed to create cfg directory.")
end
```
---
### `io.listdir`
List all the files within a directory.
#### Parameters
1. A string path to the directory.
2. A boolean indicating whether or not to recurse sub-directories.
#### Returns
An index-based table containing file paths.
```pluto
for _, filepath in io.listdir(".") do
    print(filepath)
end
```
---
### `io.makedirs`, `io.mkdirs`
Creates a directory and all the non-existing parent directories in the given path.
#### Parameters
1. The string path for your new directory.
```pluto
io.makedirs("A/B/C") -- Creates "C:\Users\Username\Desktop\Project\A\B\C"
```
---
### `io.absolute`
Convert a relative path into an absolute one.
#### Parameters
1. A string path or file stream.
2. An optional bool if the path should be canonicalized. A canonical path does not go through symlinks.
#### Returns
A string representing the new file path.
```pluto
io.absolute("cfg/cfg.txt") -- "C:\Users\Username\Desktop\Project\cfg\cfg.txt"
```
---
### `io.relative`
Convert an absolute path into a relative one.
#### Parameters
1. A string path or file stream.
#### Returns
A string representing the new file path.
```pluto
io.relative(io.absolute("cfg/cfg.txt")) -- "cfg\cfg.txt"
```
---
### `io.contents`
Get or set a file's contents.
#### Parameters
1. A string path or file stream.
2. The desired content. If this parameter is absent, this function works as a *getter.*
#### Returns
If this function is acting as a *getter*, it will return the file's contents or `nil` if there was an error.
```pluto
local text = io.contents("foo.txt") or ""
text ..= "bar"
io.contents("foo.txt", text)
```
This function is not only easier to use than the traditional `io.open` approach, it also performs significantly better.

---
### `io.filesize`
Fetch the size of a file in bytes.
#### Parameters
1. A string path or file stream.
```pluto
if io.filesize("cfg/config.txt") <= 1 then
    print("Config is too small or empty.")
end
```
---
### `io.writetime`
Get or set a file's modification time.
#### Parameters
1. A string path or file stream.
2. The desired timestamp. If this parameter is absent, this function works as a *getter.*
#### Returns
If this function is acting as a *getter*, it will return the file's last write time as seconds since the UNIX epoch.
```pluto
local time = io.writetime("foo.txt")
time += 3600
io.writetime("foo.txt", time)
```
This example adds an hour (= 60 minutes = 3600 seconds) to the last write time of "foo.txt" (or errors if that file does not exist).

---
### `io.currentdir`, `io.chdir`, `io.cwd`
Get or set the current working directory.
#### Parameters
1. A path to the desired current working directory. If this parameter is absent, this function works as a *getter.*
#### Returns
If this function is acting as a *getter*, it will return the current working directory.
```pluto
local cwd = io.currentdir() -- Get cwd
io.currentdir("abc/abc") -- Set a new cwd
```

---
### `io.chmod`
Get or set file permissions on Unix-like systems.
#### Parameters
1. A string path or file stream. If this parameter is absent, this function works as an *availability check*.
2. The desired mode/permissions. If this parameter is absent, this function works as a *getter*.
#### Returns
If this function is acting as an *availability check*, it will return a boolean.

If this function is acting as a *getter*, it will return an integer if used on a supporting platform and there wasn't an error `stat`ing the file.

```pluto
io.contents("chmod-test.txt", "") -- create chmod-test.txt with no contents
if mode := io.chmod("chmod-test.txt") then
    print("File mode: %o":format(mode))
    mode |= 0o111 -- +x
    io.chmod("chmod-test.txt", mode)
    print("New file mode: %o":format(mode))
elseif io.chmod() then
    print("Failed to stat chmod-test.txt")
else
    print("chmod is not available on this platform.")
end
```

---
### `io.unique`
Generate a unique file name by appending a number when a conflict occurs.
#### Parameters
1. The base file name without extension.
2. The file extension.
#### Returns
A string representing a file name that does not already exist.
```pluto
-- assuming index.pluto exists
print(io.unique("index", "pluto")) --> index (2).pluto
```
```pluto
print(io.unique("file_that_doesnt_exist", "pluto")) --> file_that_doesnt_exist.pluto
```

---
### `io.symlink`
Create a symbolic link pointing to a file or directory.
#### Parameters
1. The path that the link will point to.
2. The path where the symlink will be created.
#### Errors
Raises a Lua error if the operation fails.
```pluto
io.symlink("data-v3.json", "data-latest.json")
```
:::caution
This function will fail on Windows when not running as administrator.
:::
