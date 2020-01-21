---
title: Dashboard Development
---

# Dashboard Development

https://docs.google.com/document/d/1DvM5wgpl3_GBvqtMnoLWCK-NScGkosylsD0aTM7u5Os/edit#heading=h.isqozsg12wi5

## Install Tools

- https://nodejs.org/en/
- https://www.getpostman.com/
- https://code.visualstudio.com/
- Git

## Git

AGPM-6181-wik-experimental-no-merge

## Serve API

- Connect to ukvpn.gensolve.com
- Open GPMSolution
- Make GPMApi the StartupProject
- Run

## Web App

- Open the **GPMApp** folder with VS Code
- Open a terminal with Ctrl + `

In the terminal copy and paste

- npm install -g @angular/cli
- npm install
- ng s -o

The browser will open to

http://localhost:4200/login

Login with a Web User credentials

Run **Production Build** before making a PR

- ng "build" "--prod" "--configuration=Release.au" "--verbose"

## Postman

To test the API faster.

### Config

Import configuration files from inside the git directory navigate to

\_Testing\Postman\InsightsDashboard

Import Collection

GPM Insights API…

Import Environments

- Approval NZ - Single Site
- Approval NZ - Multi Site
- Approval NZ - Multi Vendor

Manually run tests
First Authenticate

Authentication
Get Vendors
Vendor Auth

Run test of API Endpoint

Automatically run tests
At the top of collection hit the play button then run all tests of all endpoints

## Troubleshooting

After upgrade to VS Community 2019

https://stackoverflow.com/questions/21829419/could-not-load-file-or-assembly-microsoft-visualstudio-web-pageinspector-loader

C:\Windows\Microsoft.NET\Framework\v4.0.30319\Config\web.config C:\Windows\Microsoft.NET\Framework64\v4.0.30319\Config\web.config

https://stackoverflow.com/questions/1376717/unable-to-make-the-session-state-request-to-the-s
ession-state-server
