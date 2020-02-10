---
title: Install Errors
---

# Install Errors

[[toc]]

## SAP Crystal Reports Fails to Install

SAP Crystal Reports is a dependency for Reporting in the Desktop Application. If attempts to install GPM continue to fail with a warning about SAP Crystal Reports it is likely that an earlier attempt to install SAP has failed. Possibly blocked from installing by your antivirus software.

To fix the problem:

- In the Windows Menu goto _Add or Remove Programs_
- Uninstall all references to _SAP Crystal Reports Runtime Engine for .NET Framework_
- Delete the SAP Business Objects folder _c:\program files (x86)\SAP Business Objects_
- Ensure your [antivirus software is configured](../antivirus/) to enable GPM to install

You should now be able to install GPM.
