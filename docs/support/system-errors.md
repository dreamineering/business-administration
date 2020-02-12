---
title: System Errors
---

# System Errors

## System Error > Cannot save form updates

Occasionally data can become locked if two users access it at the same time

1. Log out of GPM
2. When logging in again **Clear Cache**
3. Try editing and saving again

**If this does not work** make sure another user is not logged in and also attempting to update this information. If so, ask them to save their changes and close GPM, then repeat the process above.

## System Error > Paying off a membership with Save and the Receipt

The value for column QUALIFICATIONS in table PROVIDER is DBNull

![Membership Payment Error](https://drive.google.com/uc?id=1oN9dXYtn6UVdpoJb8shOK78UI2HVTvnd)

**Workaround Solution:**

1. Go to Administration > Provider
2. Find the Provider used on the Membership
3. Enter something into Qualifications, an empty-space character should also work.
