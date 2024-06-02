# Cypress MFA Testing with Mailinator

## Overview

This project demonstrates how to automate end-to-end testing involving multi-factor authentication (MFA) using Cypress and Mailinator. Mailinator provides a free, disposable email service that is useful for testing email workflows, such as MFA. By leveraging Cypress for automated browser testing and Mailinator for receiving MFA codes, this project provides a robust setup for testing authentication flows in web applications.

## Features

- **Cypress:** Automates browser actions and assertions.
- **Mailinator:** Handles receipt of MFA tokens sent via email during tests.
- **Environment Variables:** Uses secure storage for sensitive information like Mailinator API keys.

## Prerequisites

- **Node.js** (LTS version)
- **Cypress**
- A Mailinator account with an API token for accessing emails programmatically.
