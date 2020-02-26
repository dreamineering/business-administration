---
title: Data Migration
---

# Data Migration

[[toc]]

## Process Overview

1. Extract
2. Transform
3. Load

**Extract** - your current supplier exports data and makes it available to you or a secure place we can access it. **Transform** - data from your old system is transformed into a format that can be used in GPM. **Load** - transformed data is loaded into GPM. Depending on the size of your business this can take 30 mins to an entire weekend. Most migrations take approximately 2 hours to complete.

## Timeline

This is the process of getting your current supplier to extract your data, transfer that over to us so we can run the migration logic to set-up your organisation.

Below is a baseline critical path, but date and times vary dependent on workloads to respective parties and the complexity of the system you are coming from. **Note - we cannot confirm a GO LIVE date until your team confirms the migration logic is correct**. The items in bold below are your responsibility of your team.

| Step                                                     | Established | Untried    |
| -------------------------------------------------------- | ----------- | ---------- |
| **Request Approval data dump**                           |             |            |
| Data dump received                                       | +7-14 Days  | +7-14 Days |
| Initial migration logic run                              |             |            |
| **[Run through Approval Checklist](./approval-process)** | +7-14 Days  |            |
| **Approval Problems Feedback**                           |             |            |
| Run approval migration with fixes                        | +7 Days     |            |
| Repeat steps 3-5 until no issue                          |             |            |
| **Signoff migration logic**                              |             |            |
| Confirm Go Live date                                     |             |            |
| **Request LIVE data dump**                               |             |            |
| Receive Live Data and run data transfer                  |             |            |
| **Run Post Migration checklist**                         |             |            |

See if your Practice Management System is on the established migration path list below.

## Established Connections

### From Cliniko

- AUS, GBR, NZL

Transferring data from Cliniko is very straightforward.

[Learn more](./migrate-to-gensolve-from-cliniko.md)

### From Cloud Appts

[Learn more](./migrate-to-gensolve-from-cloud-appts.md)

### From Comsense

[Learn more](./migrate-to-gensolve-from-comsense.md)

### From Core Plus

[Learn more](./migrate-to-gensolve-from-core-plus.md)

### From Freehand

- GBR

[Learn more](./migrate-to-gensolve-from-freehand.md)

### From Frontdesk

[Learn more](./migrate-to-gensolve-from-frontdesk.md)

### From Gumnut

- AUS

[Learn more](./migrate-to-gensolve-from-gumnut.md)

### From Houston

[Learn more](./migrate-to-gensolve-from-houston.md)

### From MedTech

[Learn more](./migrate-to-gensolve-from-medtech.md)

### From MyPractice

[Learn more](./migrate-to-gensolve-from-mypractice.md)

### From Peak

[Learn more](./migrate-to-gensolve-from-peak.md)

### From PPMP

[Learn more](./migrate-to-gensolve-from-ppmp.md)

### From Profile

[Learn more](./migrate-to-gensolve-from-profile.md)

### From TM2/3

- AU or UK

[Learn more](./migrate-to-gensolve-from-tm3.md)

### From WinTAPS

- UK Only

[Learn more](./migrate-to-gensolve-from-wintaps.md)

## Other PMS

If your current Practice Management System is not in the list, creating new data transfer logic requires significant analysis and testing time, to justify the cost of development we first need to judge how much of the market a competitor's solution has which we will take into account when evaluating migration charges.

When dealing with data from a system we have not seen before **we are reliant on your team to guide us** as we are working blind and don't know your data as you do. If your team dutifully runs the migration approval checklist will provide then the logic should be confirmed ready for running the **Go Live** migration within two iterations.

![all-migration-options](https://drive.google.com/uc?id=1bt2ihOU2wTvLQ47ZBvNOV4UVBgWOWpl7)

## Signing off Logic Approval

We cannot know your data as well as you do. The Approval environment is created purely for your benefit to test the migration logic and know exactly what to expect when you go live.

[Learn more](./approval-process/)
