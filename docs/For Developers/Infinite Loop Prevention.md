Pluto can detect infinite loops by preventing too many successive iterations. This was implemented because game threads usually force users to call some sort of `yield` mechanism to return control to the game thread. In Pluto, you specify a hard bottleneck on iterations, then you specify a function pointer which should prevent ILP within the loop it's called in.
```pluto showLineNumbers title="This will produce an error due to ILP:"
while true do

end
```
```pluto showLineNumbers title="This will not, with correct configuration:"
while true do
    yield()
end
```
Configuration of the ILP mechanism is fairly loaded, and it's only for developers. As such, I believe Pluto's configuration file (luaconf.h) explains the rest appropriately.

:::info
This is a very simple mechanic. It has no performance overhead & it's lightweight. However, the compromise for this was coverage. This will reliably prevent most user error, however malicious users can find a way to block a thread still. For example, any forward jump will prevent the mechanism from breaking a loop. This can be exploited, so don't rely on this for security.
:::
