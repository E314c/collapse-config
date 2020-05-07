# Config collapse

This _very_ simple module allows you to do something pretty neat: You can change a configuration property as many times as you need, _until you access that property_.

This means that once one area of a system has read that value and perhaps taken it as the truth for the system, it will always be the truth for that system.
