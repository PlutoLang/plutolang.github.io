The `when` statement is vehemently similar to the `until` statement. It's simply the direct opposite.
```pluto showLineNumbers title="Looping until 'condition' is true, the old way."
repeat
    
until not <condition>
```
```pluto showLineNumbers title="Looping until 'condition' is true, the new way."
repeat

when <condition>
```
This syntax is more readable. It's not any faster, but it's the Lua semantic of `do .. while` from other languages.

## Using Compatibility Mode?
You may need to use `pluto_when` instead of `when`.
