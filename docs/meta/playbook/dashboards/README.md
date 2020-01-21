---
title: Dashboards
---

## Dashboards

## Design

- Worst First
- Fast - High-level indicators first
- Impact transaction DB little as possible
- Archive historical queries to a specialised reporting DB.

## Drill Down

- Vendor level
  - Cash Flow / Debt
  - Future Bookings Revenue
  - How future appts booked
  - Drill down to Sites
- Site-level
  - Fast
    - Cash Flow / Dent
    - Future Bookings
    - No Daily Taking Alert
    - How future appts booked
  - Drill down
    - Worst 4 Providers
- Provider
  - Saturation
  - Outcome Success
  - Average Client Spend
- Front Desk

  - Events Due
  - Event Completed

- Marketing
  - Top Spending Clients
    - what services
    - what interests
    - what sex
    - what age

## Todo

https://medium.com/@paramsingh_66174/generating-config-driven-dynamic-forms-using-web-components-7c8d400f7f2e
Switch between manager (summary) and operator (detail) view
Convert all dates when loading from API
Check filter logic when
Org only has one site
Org has multiple vendors
Set default reporting periods per report
Last week or month compared to last (n many) years
Client - Don’t make request if no sites, providers to selected
Client - Define format for presentation based on naming convention of measured field
Date => Date
Ratio => %
Count
Hours
Amount | Value => Money
Cache reported data with NgRx
Don’t resend request if data already returned

## Links

- [Dynamic Dashboards](https://towardsdatascience.com/building-dynamic-dashboards-with-angular-and-bokeh-51668a5367f1)
- [Dynamic Visualisation](https://www.newline.co/@jonrimmer/dynamic-visualisation-in-angular--b9c4cf05)
