---
title: Connection Issues
---

# Connection Issues

Generally to troubleshoot internet connections I set up a permanent ping test to one of our hostnames, i.e. appgpmnz1.gensolve.com

Then also set up another ping test to a random server, such as google.com.

I find anything below 100ms response time is fine, but once you start going up past that, especially around the 200ms point, you'll start go have issues with Gensolve (please check your internet connection pop up etc).

I can then explain to the client that if there are ping spikes just when talking to one of our hostnames, then it's generally either a routing issue, or potentially an issue with us but that is very rare.

If there are ping spikes on both tests (which is almost always the case), then it's clear that the problem isn't with us. They can then get a tech company to take the issue over, or talk to their ISP about it.

- http://www.dslreports.com/smokeping
- http://www.dslreports.com/tools

https://confluence.internal.gensolve.com/display/GEN/Support+Tools
