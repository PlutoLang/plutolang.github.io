New functions for the `io` library, implemented by Pluto.
### io.isdir
#### Parameters
1. A string path.
#### Returns
A boolean indicating if the path led toward a directory.
### io.isfile
#### Parameters
1. A string path.
#### Returns
A boolean indicating if the path led towards a file.
### io.exists
#### Parameters
1. A string path.
#### Returns
A boolean indicating if the path led towards an existing file or directory.
### io.copyto
Copy a file to another file, creating a new file if needed.
#### Parameters
1. A path towards the file to copy.
2. A path towards the file to copy into.
#### Returns
A boolean indicating if the file was successfully copied.
### io.filesize
Fetch the size of a file in kilobytes.
#### Parameters
1. The string path to the file.
#### Returns
A double.
### io.makedir
Create a directory.
#### Parameters
1. The path for the new directory.
#### Returns
A boolean indicating if the directory was successfully created.
### io.absolute
Convert a relative path into an absolute one.
#### Parameters
1. The relative string path.
#### Returns
A string representing the new file path.