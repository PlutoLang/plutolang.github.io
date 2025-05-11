This page documents the changes & additions to the `io` library in Pluto, which is built on top of Lua 5.4's.

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
#### Returns
A boolean indicating if the file was successfully copied.
```pluto
if io.copy("./cfg/config.txt", "./backup_cfg/config.txt") then
    print("Successfully created a backup config!")
else
    print("Failed to create a backup config.")
end
```
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
