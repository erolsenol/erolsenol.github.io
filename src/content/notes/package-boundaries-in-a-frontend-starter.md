---
title: Package boundaries in a frontend starter
description: How reusable workspace packages can make a product foundation easier to extend.
order: 2
project: Frontend Production Starter
---

A frontend starter can save time at the beginning of a project, but its structure also shapes later changes. When shared code has no clear owner, each new feature can make the starting point harder to understand.

Frontend Production Starter separates its product shell from reusable workspace packages. The repository includes an admin app, a small onboarding example, documentation, and packages for concerns such as UI, contracts, HTTP, validation, permissions, forms, and design tokens. The structure makes those responsibilities visible before another product feature is added.

The boundary also gives shared code a clear direction. A package can own a stable contract without depending on the application that consumes it. Product routes can then combine those contracts for a particular workflow instead of making a general-purpose package aware of one screen.

That does not mean every helper deserves a package. A useful boundary represents a responsibility that has more than one consumer, needs an independent contract, or benefits from focused documentation and checks. Keeping one-off behavior near its feature avoids turning the workspace into a collection of tiny packages with no meaningful ownership.

The starter documents a Next.js App Router setup with TypeScript strict mode, shared UI primitives, typed contracts, validation, permissions, and CI checks. The repository also includes a minimal application example, so the architecture can be explored without first learning the full admin app.

The project is available as [Frontend Production Starter on GitHub](https://github.com/erolsenol/frontend-production-starter).
