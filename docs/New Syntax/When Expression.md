The `when` expression is vehemently similar to the `until` expression. It's simply the direct opposite.
```lua showLineNumbers title="Looping until 'condition' is true, the old way."
repeat
    
until not <condition>
```
```lua showLineNumbers title="Looping until 'condition' is true, the new way."
repeat

when <condition>
```
This syntax is more readable. It's not any faster, but it's the Lua semantic of `do .. while` from other languages.