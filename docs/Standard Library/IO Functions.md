New functions for the `io` library, implemented by Pluto.
### io.isdir
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led toward a directory.
#### Example
```pluto showLineNumbers title="Example Usage"
local path = "./dir/main/"
local bool = io.isdir(path)
if bool then
    print("Directory!")
else
    print("Not a directory!")
end
```
### io.isfile
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led towards a file.
#### Example
```pluto showLineNumbers title="Example Usage"
local path = "./isfile/file"
local bool = io.isdir(path)
if bool then
    print("File!")
else
    print("Not a file!")
end
```
### io.listdir
List all the files within a directory.
#### Parameters
1. A string path to the directory.
2. A boolean indicating whether or not to recurse sub-directories.
#### Returns
A table mapping indices to file paths.
#### Example
```pluto showLineNumbers title="Example Usage"
for _, filepath in io.listdir(".") do
    print(filepath)
end
```
### io.exists
#### Parameters
1. A string path or file stream.
#### Returns
A boolean indicating if the path led towards an existing file or directory.
#### Example
```pluto showLineNumbers title="Example Usage"
if io.exists("cfg/config.txt") then
    print("Config exists!")
else
    print("Config does not exist!")
end
```
### io.copyto
Copy a file to another file, creating a new file if needed.
#### Parameters
1. A string path or file stream.
2. A path towards the file to copy into.
#### Returns
A boolean indicating if the file was successfully copied.
#### Example
```pluto showLineNumbers title="Example Usage"
if io.copyto("./cfg/config.txt", "./backup_cfg/config.txt") then
    print("Successfully created a backup config!")
else
    print("Failed to create a backup config.")
end
```
:::info
As of 0.3.2, this may throw an exception on failure.
:::
### io.filesize
Fetch the size of a file in kilobytes.
#### Parameters
1. A string path or file stream.
#### Returns
A double.
#### Example
```pluto showLineNumbers title="Example Usage"
if io.filesize("cfg/config.txt") < 1.0 then
    print("Config is too small or empty.")
end
```
:::info
As of 0.3.2, this may throw an exception on failure.
:::
### io.makedir
Create a directory.
#### Parameters
1. The path for the new directory.
#### Returns
A boolean indicating if the directory was successfully created.
#### Example
```pluto showLineNumbers title="Example Usage"
if io.makedir("./cfg") then
    print("Created cfg directory.")
else
    print("Failed to create cfg directory.")
end
```
### io.absolute
Convert a relative path into an absolute one.
#### Parameters
1. A string path or file stream.
#### Returns
A string representing the new file path.
#### Example
```pluto showLineNumbers title="Example Usage"
--> cfg/config.txt
io.absolute("cfg/cfg.txt") --> "C:\Users\Desktop\Username\Project\cfg\cfg.txt"
```