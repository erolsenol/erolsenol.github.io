---
title: Boundaries for a self-hosted image processing API
description: How remote fetches, transforms, caching, and batch jobs shape a self-hosted image service.
order: 3
project: image-craft-service
publishedAt: '2026-10-04'
---

An image endpoint starts with a simple request: take a source, apply a few operations, return a smaller or more suitable image. The service becomes more interesting when that source can be either an upload or a remote URL, and when several clients ask for the same transformation at once.

The first boundary is the source. A remote URL is untrusted input, so the service checks that it resolves to a public address before fetching it. Upload and output sizes, processing concurrency, and signed transform URLs put explicit limits around the work a request can trigger.

The second boundary is repeated work. A normalized source, operation chain, and output format can identify a remote transform for caching. Request coalescing lets identical concurrent misses share a fetch and transform; ETags let a client reuse an unchanged response. Uploaded files use an explicit cache key so the caller controls when those results can be reused.

Batch processing belongs on a different path from a single request. The optional Redis-backed queue can process multiple items, report item-level errors, retry work, and stream a ZIP result. Keeping the queue optional lets a small deployment use synchronous transforms without adopting background infrastructure.

The service exposes those choices through a Node.js API, TypeScript and Python clients, a CLI, and a React image component. The API can run with local storage or optional S3-compatible storage, while its transform behavior stays behind one service boundary.

The design does not remove the trade-offs. Remote analysis and smart quality selection spend more CPU to estimate output quality, and a cache only helps when its key represents the right source and operations. Those choices stay configurable so a deployment can match them to its workload.

Explore [image-craft-service on GitHub](https://github.com/erolsenol/image-craft-service) for the implementation, Docker setup, API documentation, and client examples.
