---
sidebar_position: 12
---

This page contains the changelogs from all [releases of Pluto](https://github.com/PlutoLang/Pluto/releases).

## 0.10.0
- Added chained comparisons (e.g. `1 <= i <= #t`)
- Added private methods to classes
- Private fields (and methods) can be declared and accessed anywhere inside the class now. Previously, you needed to define a private field *before* you accessed it. This is no longer a restriction.
- Pluto now automatically detects if non-compatible keywords should be enabled or disabled based on usage
  - This is overwritten by the scripter using `pluto_use` or the integrator or user managing compatibility mode, so it only applies when absolutely zero configuration has been applied. This is a significant improvement for lua source code compatibility. 
- `do` can now be used instead of `then` and `begin`
- `if` expressions are now no longer deprecated but require an `end` (e.g. `print(if a then b else c end)`)
- `$define` statement now requires an assignment
- Fixed handling when an invalid RSA private key is passed to crypto.encrypt, crypto.decrypt, crypto.sign
- Fixed not being able to load Lua C modules on Linux
  - For simplicity in this regard, Pluto now always uses the C ABI to export `lua_` functions and the C++ ABI for `pluto_` functions.

Standard library:
- Added canvas library
- Added ffi library
- Added regex library
- Added assert.contains
- Added bigint.eq, bigint.lt, & bigint.le
- Added crypto.ripemd160
- Added crypto.exportkey & crypto.importkey
- Added crypto.decompress
- Added string.tohex & string.fromhex
- Added table.findindex/findkey, table.back, table.keys, table.modget, table.modset, table.slice, table.countvalues, & table.chunk
- Added socket.getpeer, socket.peek, socket.getside, socket.istls, & socket.isopen
- Added optional limit argument to string.split
- Added io.cwd and io.chdir as aliases for io.currentdir
- socket.starttls can now be used on server sockets
- Optimized json.encode with `__order`

## 0.9.5
- Fixed io.contents not returning an empty string for empty files on Windows
- Fixed table.clear not resetting cached length
- Fixed http.request allowing header values to contain CR and LF (CVE-2024-45597)
- Fixed strings implicitly concatenating with each other
- Fixed incorrect formatting with some instances of VM dumping
- PHP build scripts now pass on additional arguments to the compiler

From Lua:
- Fixed wrong code gen for indices with comparisons

## 0.9.4
- Improved field-shadow warning to say which field is shadowed
- Improved handing of `parent` keyword
- Improved error message for `if then`
- Fixed an 'else if' warning false-positive
- Fixed compile-time concat sometimes causing a parse error
- Fixed infinite loop with nested switch expressions when flow should go to default case
- Fixed exception when raising argument type mismatch warning when expected type is a function
- Fixed a compatibility issue with `return case`

Standard library:
- Made string.replace binary-safe and faster
- CaT module now supports the optional [value encoding](https://github.com/calamity-inc/Soup/blob/senpai/docs/user/cat.md#value-encoding) feature

## 0.9.3
- Added a warning for '(' being used instead of '|' for pipe operator arguments
- Improved error reporting when an invalid parent is given to 'extends'
- Fixed extending a global class unexpectedly pushing _G
- Fixed incorrect results when using 'not' on result of null coalescing operator
  - As a result of this fix, the null coalescing operator is now bytecode-compatible with Lua
- Fixed parsing ambiguities with ternary expressions in switch cases

Standard library:
- Fixed `json.encode(json.decode(..., json.withnull + json.withorder))` producing unexpected artifacts
- Fixed data corruption when json.decode is used on large data
- Fixed insufficient TLS peer verification in HTTP library and socket.starttls in non-WASM builds (CVE-2024-32973)

## 0.9.2
This release fixes several regressions made in 0.9.1:
- Fixed failing to compile on aarch64
- Fixed method calls no longer working in ternary expressions even with parentheses
- Fixed walrus operator no longer being usable within unary operator expressions

Furthermore, it improves the walrus operator in regards to disallowing UB and clarifying related error messages.

## 0.9.1
- Improved try/catch
- Improved parsing of for-as loops
- Deprecated if expressions (`if a then b else c`) in favor of ternary expressions (`a ? b : c`)
- Fixed instances of `:` starting method call when it should delimit ternary expression
- Fixed unreachable-code triggering for non-constant values
- Fixed repeat + continue being able to read uninitialized variables
- Fixed break and continue possibly not closing upvalues
- Fixed continue not working as expected when passing through switch statement
- Fixed switch cases being able to read uninitialized variables
- Fixed inconsistent behavior with safe navigtion method calls and multiple return values
- Fixed walrus operator being able to cause UB or corrupt the stack
- Fixed pipe operator possibly generating incorrect code

Huge thanks to @XmiliaH for reporting the majority of bugs fixed in this update and helping fix them.

## 0.9.0
- Added `$define` statement
- Added pipe operator (`|>`)
- Added compound XOR operator (`~=`)
- Added optional `global` keyword and 'implicit-global' warning
- Added `@fallthrough` annotation and 'unannotated-fallthrough' warning
- Added `<nodiscard>` function attribute and 'discarded-return' warning
- Added 'field-shadow' warning
- Lambdas can now have full bodies by starting with 'do' (e.g. `|a| -> do return a end`)
- `pluto_use` can now also be used via `@pluto_use` in comments
- `new` operator now also supports static 'new' function
- Deprecated `**` operator (use `^` instead)
- Deprecated `let` statement (use `local` instead)
- Deprecated `const` statement (use `local` with `<const>` or `$define` instead)
- Deprecated `<constexpr>` attribute (replaced by `$define` statement)
- Re-added compile-time concat optimization
- Fixed switch cases being able to jump into the scope of a variable
- Fixed being able to set `nil` as a default argument

Standard library:
- Added '*' library
- Added 'cat' library
- Added 'http' library
- Added 'socket' library
- Added 'xml' library
- Added 'bigint' class
- Added 'scheduler' class
- Added os.platform constant
- Added range function
- Added io.contents function
- Added io.relative function
- Added copying variants of existing functions (table.sorted, table.mapped, table.filtered, table.reversed, table.reordered)
- Added table.size function
- Added table.clear function
- Added table.reduce, table.min, & table.max functions
- Added table.find function
- Added table.checkall function
- Added coroutine.sleep function
- Added crypto.generatekeypair function
- Added crypto.encrypt & crypto.decrypt functions
- Added crypto.sign & crypto.verify functions
- Added crypto.sha1, crypto.sha384, & crypto.sha512 functions
- Added crypto.adler32 function
- Added url.parse function
- Added math.round function
- `json.encode` now supports `__order` for objects
- `json.decode` now has an optional flags parameter, they can be combined via binary OR
  - `json.withnull` makes it decode JSON nulls as `json.null` instead of `nil`
  - `json.withorder` makes it produce `__order` field for objects
- coroutines/threads now have a metatable by default
- base64.encode & base32.encode changed padding parameter's default value from false to true (base64.urlencode is unchanged)
- Fixed crypto.fnv1 & crypto.fnv1a producing incorrect hashes for non-ASCII strings

CLI:
- Added '-c' flag to pluto & plutoc to enable compatibility mode

For integrators:
- Added `PLUTO_READ_FILE_HOOK` & `PLUTO_WRITE_FILE_HOOK`
- Added `PLUTO_HTTP_REQUEST_HOOK`
- Removed `PLUTO_USE_THROW` as we now default to using C++ exceptions for Lua errors to avoid breaking RAII semantics. You can still specify `LUA_USE_LONGJMP` if you want long jumps.
## 0.8.2
- Added variable scoping warnings to switch statements to highlight code that will break in 0.9.0
- Improved some error messages
- Fixed base32 & base64 functions not being binary-safe
- Removed compile-time concat optimization because it could produce incorrect results
## 0.8.1
- Added a specialized error message for `local class =` etc
- 'exportvar' now prefixes function bytecode with 'load'
- Improved code generation for switch blocks
- Improved "possibly unwanted function call" warning
- Fixed dumpvar & exportvar not handling recursion of sub-tables
- Fixed assert.equal & assert.nequal ignoring extra fields in value2
- Fixed 'until' possibly using a variable from wrong scope due to 'continue'
- Fixed var-shadow warning for named vararg being raised on the wrong line

For integrators:
- Added `PLUTO_MEMORY_LIMIT`
- Added `PLUTO_NO_DEBUGLIB`
- Added `PLUTO_NO_COROLIB`

For a more comprehensive overview of the changes, [take a look at the commit log](https://github.com/PlutoLang/Pluto/compare/0.8.0...0.8.1).
## 0.8.0
- Added switch expressions
- Added shorthand fallthrough syntax for switch statement & expression, e.g. `case 1, 2: ...`
- Added try...catch statement
- Added spaceship operator (`<=>`)
- Added safe navigation for method calls: `nilable_inst?:method()`, `inst:nilable_method?()`, `nilable_inst?:nilable_method?()`
- Added optional 'const' keyword as shorthand for `local ... <const> [= ...]`, enabled with `pluto_use const`.
- Added `pluto_use "VERSION+"`
- Tables now have a metatable by default (`{ __index = _G.table }`).
- Added '!' as an alias for 'not'
- Added 'private' modifier for class fields
- Improved 'class' and 'extends' to support indexed names
- Improved 'instanceof' to be usable with more complex expressions
- `export` now works in all scopes, not just the main body
- Updated `in` operator on tables to check values instead of keys
- `\{` is now a valid escape sequence (for interpolated strings)
- Fixed to-be-closed variables not working in switch cases
- Fixed 'new' not working as expected if it was disabled by the environment and re-enabled by 'pluto_use'
- Fixed 'enum class' not incrementing enumerator values
- Fixed not being able to use expressions such as increment in enum without parentheses
- Added compile-time concat optimization

Warnings:
- Added warning for local attributes used without '&lt;' ... '&gt;'
- Now propagating types for global variables so when their value is assigned to something, mismatches can be detected.
- Added optional `global-shadow` warning which is like `var-shadow` but for globals that are especially vulnerable to obscure shadowing bugs (to prevent excessive annoyance).
  - These globals include: `arg`,`string`, and `table`. Integrators can change this via `PLUTO_COMMON_GLOBAL_NAMES`
  - Global shadow warnings do not apply to localization optimization (i.e, `local table = table`)
- `var-shadow` has been improved to check more enclosing scopes
- Improved `unreachable-code`
- Fixed var-shadow warning for locals used in switch cases despite break
- Added optional `non-portable-code`, `non-portable-bytecode`, and `non-portable-name` warning types
- Warnings can now be promoted to errors, e.g. `@pluto_warnings error-all`

Standard library:
- Soup is now always linked in, obsoleting `_PSOUP`
- Added assertion library (see [here](https://github.com/PlutoLang/Pluto/pull/426) for more preliminary detail)
- Added url library (encode & decode)
- Added exception class
- Added vector3 class
- Added dumpvar & exportvar
- Added string.truncate
- Added string.replace — a slightly faster, but mostly more straightforward alternative to gsub.
  - Most notably, not burdened by `MAX_CAPTURES`
- Added string.formatint (supports any BigInt impl that can offer the user a string representation)
  - Also supports any grouping & any separator without concerning locale.
- Added table.filter
- Added table.map
- Added table.reverse
- Added table.reorder
- Added io.currentdir
- Added io.part
- Added io.writetime
- Added math.isnan
- Added compareversions
- Added wcall
- Added math.atan2 as an alias for math.atan
- Added json.null
- io.absolute now has an optional argument to request a canonicalized absolute path
- Updated string.rfind to accept Lua patterns
- Renamed io.copyto to io.copy
- Renamed base64.url_encode & base64.url_decode to base64.urlencode & base64.urldecode
- Deprecated string.find_first_of & string.find_first_not_of in favor of string.find
- Deprecated string.find_last_of & string.find_last_not_of in favor of string.rfind
- Deprecated string.lfind in favor of string.find
- Deprecated crypto.hexdigest in favor of string.format
- Modified `require`
  - Prioritizes local files now to ensure compatibility. Added `require("pluto:libname")` to explicitly request pluto libraries if ever needed (normal still works for pluto libraries, we just check for local files first).
- Removed base58

For integrators:
- Added `PLUTO_NO_FILESYSTEM` - disables all filesystem access (for sandboxing).
- Added `PLUTO_WARN_NON_PORTABLE_CODE`
- Added `PLUTO_WARN_NON_PORTABLE_BYTECODE`
- Added `PLUTO_WARN_NON_PORTABLE_NAME`
- Added `PLUTO_NO_BINARIES` - disables all dll/so/c module loading (for sandboxing)
- Added `luaG_addsrcinfo`

Far more information can be found at our documentation: https://pluto-lang.org/
## 0.7.4
- Fixed unexpected behavior when using a ternary expression inside of an interpolated string
- Fixed `table.contains` returning `0` instead of the actual key for non-integer key types
- Fixed REPL not recognizing multi-line statements
- Fixed Pluto-injected code corrupting bytecode

For integrators:
- Added `PLUTO_LOADCLIB_HOOK`
## 0.7.3
- Updated error semantics of os.remove & os.rename to match Lua's again (return false instead of raising error), Pluto's 'io' versions of these functions remain unchanged
- Fixed `extends` not copying over metamethods
- Fixed "memory allocation error: block too big" when parsing `--[[]]`
- Fixed allowing function calls to primitives, causing ambiguities with exprstat after assignment
- Fixed string.upper & string.lower delimiting on '\0'
- Some other improvements and bugfixes
## 0.7.2
- String interpolation now allows nested strings
- Improved "unreachable code" warning
- Improved some error messages
- Fixed string interpolation not working with string call syntax
- Fixed rare issues with 'new', 'extends' and 'instanceof' operators
## 0.7.1
- Fixed string interpolation not working with single-quoted strings after 0.7.0
- Fixed os.sleep disregarding execution time limit
- Fixed scripts being able to go past execution time limit with coroutines
## 0.7.0
- Added table destructuring (`local '{' NAME [= FIELD][, ...] '}' '=' TABLE`)
- Added array destructuring (`local '[' NAME[, ...] ']' '=' TABLE`)
- Added `pluto_use <* | version | token> [= false]` to toggle non-compatible keywords
- Added `pluto_use let [= false]` to toggle 'let' alias for 'local'
- Added ++ statement
  - Also supports `++t.prop`
- Added constructor promotion
- Added compile-time conditionals
- Improved class expression & statement
  - Now supports property declaration without value
  - Now supports type hints (currently without warnings)
  - Now supports access modifiers (currently without warnings or errors)
  - Can now optionally use 'begin' before body
- Improved string interpolation to support any expression, not just variable names
- Improved type hints to support alternatives, e.g. `string|int`
- Named arguments may now be used in conjunction with positional arguments
- Improved 'new' expression to support direct member access into the table it created, e.g. `print(new Human("John").name)`
- 'new' may now also be used as a statement
- Fixed loading of precompiled code from files with non-Latin path on Windows
- Fixed behavior of 'in' expression when used on a temporary table

Out-of-the-box Compatibility:
- 'parent' may now be overwritten via local or parameter name
- All reserved identifiers can now be used with shorthand table syntax and goto

Standard library:
- Added coroutine.xresume

For integrators:
- Added `PLUTO_USE_LET`

More detailed documentation can be found [here](https://pluto-lang.org/).
## 0.6.3
- Defaults arguments now produce Lua-compatible bytecode
- Fixed default arguments not working for methods
- Fixed named arguments, etc. not working for upvalue functions
- Fixed 'in' expression for when right-hand operand is nested table
- Fixed 'in' expression being too greedy in consuming righthand operand

For integrators:
- Added PLUTO_LUA_LINKABLE
## 0.6.2
- Optional Parentheses now works for table types and with chained "suffix expressions"
- Fixed `new` overwriting user-defined `__index`
- Fixed infinite recursion with multi-level parent calls
- Fixed some other small issues

Performance:
- Optimized lua_insert, lua_remove, & lua_replace (Optimization by @gottfriedleibniz)
- Optimized luaO_ceillog2 (Inspired by @gottfriedleibniz)
- Enabled Lua's jump table for clang build as well
- Fixed a VM performance regression introduced by Pluto
## 0.6.1
- Improved suggestions (for when using plutoc with the language server)
- Optimized switch statement code generation (now omits cases leading to default case)
- Fixed producing syntax error when 'case' or 'default' is used outside of switch
- Fixed using 'export' outside of global scope not producing an error
- Fixed some confusing error messages
- Pulled in the latest Lua changes so some Lua bugs are now fixed
## 0.6.0
- Added `<constexpr>` attribute to force locals to be compile-time constants
- Added `$expr` syntax for compile-time evaluation of select functions
- Added `export [NAME=VALUE | function | class]` syntax
- Added named arguments (`name=value` in funcargs)
- Added named varargs (`...NAME`), automatically puts the varargs into a table with the given name
- A subset of Soup is now vendored with Pluto so standard library features that rely on it should now be more viable
- Removed deprecated "pluto_case" and "pluto_default" keywords
- Removed `when` statement

Enums:
- Added `ENUM.ENUMERATOR` syntax for named enums
  - Added `ENUM CLASS NAME ...` syntax to force usage of this syntax
- Added enum reflection for named enums (`:names()`, `:values()`, `:kvmap()`, `:vkmap()`)

Object-oriented programming:
- Added `new TABLE(...)` syntax (creates new table, sets TABLE as its metatable + __index, calls `:__construct(...)` if exists)
- Added 'class' statement & expression (similar to table but without need for ',' or ';' after properties and functions)
  - 'class' and 'local class' statements also support `extends NAME` which sets __parent property and metatable with __index
  - Added `static function NAME` for use within table constructor/class definition (equal to `NAME = function`)
- Added 'parent' expression
  - `parent.PROP` -> `self.__parent.PROP`
  - `parent:METHOD(...)` -> `self.__parent.METHOD(self, ...)`
- Added `TABLE instanceof METATABLE` operator

Type hints:
- Added 'int' & 'float' type hints (more restrictive than 'number')
- Added 'void' type hint for function return type

Standard library:
- Added utonumber, utostring, & string.uformat
- Added `instanceof(TABLE, METATABLE)`

For integrators upgrading to Pluto 0.6.0:
- Consider defining `PLUTO_COMPATIBLE_NEW`, `PLUTO_COMPATIBLE_CLASS`, `PLUTO_COMPATIBLE_PARENT` & `PLUTO_COMPATIBLE_EXPORT` so 'new', 'class', 'parent' & 'export' will not be reserved keywords just yet, instead 'pluto_new', 'pluto_class', 'pluto_parent' & 'pluto_export' can be used.

More detailed documentation can be found [here](https://pluto-lang.org/).
## 0.5.4
- Default arguments now support tables
- Pluto now supports building with C ABI so you can replace Lua's shared library with Pluto's without needing to change the program
- Fixed `return` before `case` or `default` causing a syntax error
- Fixed access violation on lua_close with strings as default parameters
## 0.5.3
- Default arguments now support compile-time constant variables, unary `-`, and pseudo-unary `+`
- Re-added `os.remove` & `os.rename` because they originated in Lua and should not have been removed
- Fixed some instances of errors not providing a code snippet and reporting the wrong line
- Fixed enumerators being limited to 32-bit values
- Fixed warning disable/enable being global-only
- Removed if-goto optimisation due to various edge cases where goto is not executed
## 0.5.2
- Enum statement: Now supports compile-time constant variables when setting value
- Fixed `require`, `dofile`, etc. not taking UTF-8 encoded paths on Windows
- Fixed pluto & plutoc not being able to execute files with foreign names on Windows
## 0.5.1
- Enum Statement: Now supports unary `-` and pseudo-unary `+` when setting value
- Replaced locals limit with registers limit so you can have more compile-time constants
- Fixed Pluto's IO functions not taking UTF-8 encoded paths
- Fixed UB when emitting unfinished string error, possibly resulting in an access violation
## 0.5.0
- Added "for ITERABLE as VALUE" loop
- Added $-strings (string interpolation)
- Added prefix ++ operator
- Added support for binary number literals.
- Added C-style enums
- Added `_PSOUP` global
- Updated `package.path` to look for .pluto files in working directory by default
- Deprecated "pluto_case" and "pluto_default" (now "case" and "default", respectively)
- Removed what was deprecated in 0.4.0 (sleep -> os.sleep, os.remove -> io.remove, os.rename -> io.rename)
- Added execution time limit (optional, must be enabled in luaconf.h)
- Added content moderation

Standard Library:
- Added io.makedirs

Standard Library (Soup):
- Added `base64`
- Added `base58`
- Added `base32`
- Added `json`
## 0.4.5
- Improved wording of some warning & error messages
- Fixed excessive "duplicate local declaration" warnings
- Cherry-picked some Lua commits, so the following Lua bugs are now fixed:
  - 'break' may not properly close variable in a 'for' loop
  - error message in 'table.remove'
  - 'utf8.codes' accepts spurious continuation bytes
  - Negation in constant folding of '>>' may overflow
  - stack overflow with nesting of coroutine.close
## 0.4.4
- Added math.rand as an alias for math.random
- Changed unknown type hint to be warning instead of error
- Reverted table.insert optimation due to unexpected behavior
- Some minor tweaks
## 0.4.3
- Improved most error messages, and vastly improved the internal code for them.
- These reserved tokens can be used as identifiers outside of their functional context: `default`, `case`
- Optimized the performance of `table.insert`. Roughly 3x faster, but still slightly slower than `t[#t + 1]`
- Pluto can now be built using [Sun](https://github.com/calamity-inc/Sun).
## 0.4.2
- Fixes a regression introduced in Pluto 0.4.1 that prevented the walrus operator from working within lambda functions that are passed as function arguments
## 0.4.1
- Updated lexer to tokenise in a separate pass
    - This fixes Pluto's error messages sometimes not showing the full line
- Disallowed use of the walrus operator within a function call because it was found to be more janky than expected
## 0.4.0
Additions:
- Walrus Operator
- Default parameters for functions.
- New standard library: `lcryptlib`, for various hash algorithms and cryptographic PRNGs. 
- New warnings:
   - Unreachable code.
   - Too many function arguments.

Improvements:
- Switch case may now use variables.
- Shorthand ternary syntax from C/C++.
- Warnings can be configured with comments.
- Improved performance of some common arithmetic algorithms.
- VM Dumping has been rewritten for superb runtime detail on all opcodes, their arguments, their results, etc.
- `string.upper` & `string.lower` take a second parameter indicating a specific index to change. Absence of this parameter preserves default behavior.
## 0.3.2
Improvements:
  - `io.copyto` will now overwrite existing files instead of throwing an exception.
  - Improve error handling of other exception-prone IO functions.
## 0.3.1
Bugfix:
- String.split would previously invoke an infinite loop when an empty string is used as the delimiter.
## 0.3.0
Additions:
- Inlined method creation.
- STR in STR expressions.
- KEY in INDEXABLE expressions.
- Generalized iteration, no need for `pairs`.
- `io.listdir`
- Reserved keywords as valid fields.
- Null-coalescing operator (w/ compound operator).
- `continue N` & `break N` for manipulating outer loops.
- Optional type-hinting, with parser warnings.
- Safe accessor navigation, to avoid "attempt to index nil" errors for deeply nested fields.

Changes:
- `table.contains` now returns an index if found and nil otherwise (previously returned true or false).

Improvements:
- Switch no longer has syntactic restrictions
- Greater switch performance

Documentation for the new changes can be found [here](https://plutolang.github.io/).
## 0.2.2
- Fixes a bug with the `continue` keyword
## 0.2.1
* Added VM Dump
* Implemented long jump optimisation
## 0.2.0
* Added compile-time warnings for duplicate local declarations
* Added optional ANSI color sequences in various error & warning messages
* Added support for ternary expressions
* Added continue statement
* Added Table Freezing / Immutability
* Added Switch/Case statements
* Added user_data to global_State
* Added !=
* Added compatibility mode
* Added table.contains
* Added new time functions to os api
* Added negative string indexing
* Added compound concatenation operator
* Added new string functions
* Added portable jumptable implementation that can be optionally enabled
* Added REPEAT .. WHEN loop support
* Added new IO library functions
* Added _PVERSION
* Implemented table length cache optimisation (2x speedup)
* Implemented optional parentheses around string literals for method invocation
* Increased local variable limit from 200 to 249
* Rebased with Lua for latest bugfixes
## 0.1.0
Initial version.

Notable features:
- Lambda expressions
- Arbitrary character insertion in numeral literals
- Many compound operators
- `**` exponent operator