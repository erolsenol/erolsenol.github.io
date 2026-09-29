---
title: Provider-neutral email APIs in TypeScript
description: A look at a shared mailer contract, provider adapters, optional SDKs, and inbound webhooks.
order: 1
project: TypedMailer
---

Email integrations often begin with a provider SDK. That can be a good fit for a small application, but it also ties application code to one provider's request and response shapes.

TypedMailer explores a narrower contract: application code asks one library to send transactional email, while a provider adapter handles the provider-specific API. Its current README documents seven options: Resend, Brevo, Postmark, SendGrid, Mailgun, Amazon SES, and SMTP.

The boundary is useful because it leaves the application in charge of its own behavior. Templates, queues, retries, and business rules stay with the application. TypedMailer handles the provider connection, while provider SDKs remain optional peer dependencies and only the selected adapter is loaded.

There is a related but separate inbound path. The `typedmailer/webhooks` entry point verifies and normalizes provider events. It deliberately does not add HTTP routing, persistence, or event processing. Those responsibilities depend on the host application, so they remain outside the mailer package.

This separation gives the package a focused job: expose a typed sending interface and isolate provider details. It does not remove provider differences or decide how an application should process delivery events. It makes those boundaries explicit, so an application can choose its own queue, storage, and operational policy.

The project is available as [TypedMailer on GitHub](https://github.com/erolsenol/typedmailer) and as the [`typedmailer` npm package](https://www.npmjs.com/package/typedmailer).
