# Dot Dasher

This is a full-stack application built with Next.js, Drizzle ORM, and Stripe. It serves as a boilerplate for creating SaaS applications with user authentication, subscription management, and a dashboard for managing users and teams.
It includes a marketing landing page, a pricing page with Stripe Checkout integration, and a dashboard for managing users and teams. The application also implements basic role-based access control (RBAC) with Owner and Member roles, allowing for different levels of access to the dashboard features.

## Features

- Marketing landing page (`/`) with animated Terminal element
- Pricing page (`/pricing`) which connects to Stripe Checkout
- Dashboard pages with CRUD operations on users/teams
- Basic RBAC with Owner and Member roles
- Subscription management with Stripe Customer Portal
- Email/password authentication with JWTs stored to cookies
- Global middleware to protect logged-in routes
- Local middleware to protect Server Actions or validate Zod schemas
- Activity logging system for any user events

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Database**: [Postgres](https://www.postgresql.org/)
- **ORM**: [Drizzle](https://orm.drizzle.team/)
- **Payments**: [Stripe](https://stripe.com/)
- **UI Library**: [shadcn/ui](https://ui.shadcn.com/)
