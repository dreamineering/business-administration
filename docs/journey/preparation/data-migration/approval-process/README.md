---
title: Migration Approval Checklist
---

# Migration Approval Checklist

Run throught this process to confirm the migration logic is acceptable for going live with GPM.

Comparing a view of the calendar for a recent past or future busy week and check

- No Missing data (Clients, Appointments etc)
- Nothing imported that should have been ignored
- No Mapping Errors
  - Missing fields (Email or Mobile etc has not been imported)
  - Data in the wrong place (Home Phone is appearing the Mobile category)
  - Dates have month and day switched.

## Providers (Clinicians)

Check all your providers are on the correct sites with correct schedules

## Patients (Clients)

Pick out at least 20 clients to compare information with existing system.

Please pay particular attention to

- Phone Numbers
- Email
- Date of Birth
- Gendor

If a mobile number or email is missing please look in Notes. We have to do some data clean up on these fields to prevent errors with the system.

## Patient Conditions

Key Question - should treatment for a related appointment be paid privately or by a debtor

Insured appointments must have a condition in GPM and each new Auth Code should have a new condition.

Pay close attention to...

- Condition Type
- Debtor (Insurer) Name
- Auth Code
- Expiry Date
- Appointments Allowed
- Appointments Used

POST MIGRATION TASKS

You should be very vigilant to confirm accuracy of information with each client on first treatment in GPM following migration

If in New Zealand working with ACC check related

- ACC32 requests
- Appointment counts
- Condition READ CODES

## Patient Appointments

Pick a recent busy day/week in your existing system and confirm that all appointments have the correct

- Site
- Provider
- Client
- Datetime
- Duration

(this is also the best way to identify missing clients)

### POST MIGRATION TASKS

For upcoming appointments manually assign the correct

- Service Type
- Condition (if appropriate)

## Patient Notes

Check the notes for accuracy and completeness of information captured

## Referrers

Check that all referrers (GPs, Specialists) have been migrated

Referrer data is used by both clients and conditions

## Clinics

A referrer can belong to a clinic if this information is set

## Products

Products > Products

Is the tax component (GST | VAT) of pricing correct?

## Debtors (Insurers)

Accounting (Ctrl + 2) > Money In > Debtors

Check that all debtors are present

As a learning exercise to get ready for go live it good to review out an Insurers Auth Code is set"

## Outstanding Debt

Accounting (Ctrl + 2) > Money In > Invoices

Reconcile Aged Debtor Report from old system with GPM at the time of LIVE transfer. This is vital information and should always be double checked on day of go live for accuracy so that you can move forward using GPM only.
