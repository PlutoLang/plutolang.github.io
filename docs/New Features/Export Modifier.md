---
sidebar_position: 5
---
The `export` modifier allows you to automatically aggregate things you want to export into a table.

```pluto title="Old Code"
local version = 2

local function add(a, b)
	return a + b
end

return {
	version = version,
	add = add
}
```

```pluto title="New Code"
export version = 2

export function add(a, b)
	return a + b
end
```

The return statement is automatically generated.

This works in all functions:

```pluto
package.preload["test"] = function()
	export version = 2

	export function add(a, b)
		return a + b
	end

	-- end of scope; 'return' is automatically generated
end

print(require"test".version)
```

## Using Compatibility Mode?

You may need to use `pluto_export` instead of `export`. Alternatively, `pluto_use export` will enable the keyword independently of environment settings.
