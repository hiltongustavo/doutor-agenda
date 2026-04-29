# 🏥 Medical SaaS — Scheduling System for Clinics

Project developed as a study at the **Full Stack Club**, focused on creating a **SaaS (Software as a Service)** for managing clinics and medical appointments.

The application allows full control of doctors, patients, scheduling, and appointment history, with modern authentication and subscription-based payment integration.

---

## 🚀 Technologies Used

- **Next.js** — Fullstack React framework
- **PostgreSQL** — Relational database
- **Drizzle ORM** — Database management and access
- **Better Auth** — Modern authentication
- **Stripe** — Payment and subscription processing
- **TypeScript** — Static typing
- **Shadcn/ui** — UI components
- **React** — User interface

---

## ⚙️ Features

- 👨‍⚕️ Doctor registration
- 🧑‍🤝‍🧑 Patient registration
- 📅 Appointment scheduling
- 📋 Appointment history
- 🔐 Google authentication (Better Auth)
- 💳 Subscription system (Stripe Billing)
- 📊 Admin dashboard
- 🧾 Plan and access management

---

## 🧱 Architecture

The project follows a fullstack architecture using Next.js, with:

- API Routes for backend
- Drizzle ORM as the database access layer
- PostgreSQL as the database
- Better Auth for authentication
- Stripe Webhooks for payment and subscription control

---

## 🛠️ Prerequisites

Before getting started, you need to have installed:

- Node.js (>= 18)
- PostgreSQL
- Stripe account
- Google Cloud account (OAuth)

---

## 📦 Installation

Clone the repository:

```bash id="x9c2l1"
git clone https://github.com/hiltongustavo/doutor-agenda
```

Install dependencies:

```bash id="z3n8v2"
npm install
```

---

## 🔐 Environment Variables

Create a `.env` file in the root of the project and add:

```env id="ee32zh"
# App
NEXT_PUBLIC_APP_URL=

# Database
DATABASE_URL=

# Authentication
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# Stripe
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
STRIPE_PRODUCT_ID=
STRIPE_ESSENTIAL_PLAN_PRICE_ID=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL=
```

---

## 📌 Variable Description

### 🌐 App

**NEXT_PUBLIC_APP_URL**
Base URL of the application (e.g. http://localhost:3000)

---

### 🗄️ Database

**DATABASE_URL**
PostgreSQL connection string
Example:

```id="ahy1uc"
postgresql://user:password@localhost:5432/database
```

---

### 🔐 Authentication (Better Auth + Google)

**BETTER_AUTH_SECRET**
Secret key used for session encryption

**BETTER_AUTH_URL**
Base URL used by the authentication system

**GOOGLE_CLIENT_ID**
Client ID generated in Google Cloud Console

**GOOGLE_CLIENT_SECRET**
Client Secret generated in Google Cloud Console

---

## 🔑 Google Auth Configuration

1. Access Google Cloud Console
2. Create a project
3. Enable Google OAuth API
4. Create OAuth 2.0 credentials
5. Add the callback URL:

```id="wab42s"
http://localhost:3000/api/auth/callback/google
```

---

### 💳 Stripe (Payments and Subscriptions)

**STRIPE_SECRET_KEY**
Stripe API secret key

**STRIPE_WEBHOOK_SECRET**
Webhook validation secret

**STRIPE_PRODUCT_ID**
ID of the product created in Stripe

**STRIPE_ESSENTIAL_PLAN_PRICE_ID**
Subscription price ID (e.g. monthly plan)

**NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY**
Stripe public key (frontend)

**NEXT_PUBLIC_STRIPE_CUSTOMER_PORTAL_URL**
Customer portal URL for subscription management

---

## 🗄️ Database Setup

Run migrations (Drizzle):

```bash id="m5r2d7"
npx drizzle-kit push
```

---

## ▶️ Running the Project

Development environment:

```bash id="p4x6t9"
npm run dev
```

The application will be available at:

```id="u8w3n2"
http://localhost:3000
```

---

## 💳 Stripe Configuration (Webhook)

For local testing:

```bash id="t6v9b1"
stripe listen --forward-to localhost:3000/api/webhooks
```

Add the generated webhook to:

```id="r2k8s4"
STRIPE_WEBHOOK_SECRET
```

---

## 📂 Project Structure (overview)

```id="d3l9f6"
/app
  /(protected)
  /api
/db
  schema.ts
```

---

## 🧪 Stripe Test Payments

Test interactively

For testing payments, use the following Stripe test card:

Card number:

```
4242 4242 4242 4242
```

Expiration date:

```
Use any valid future date (e.g. 12/34)
```

CVC:

```
Use any 3-digit number (4 digits for American Express)
```

Other fields:

```
You can use any values for the remaining form fields.
```

💡 Notes
These cards only work in test mode
No real charges will be made
Make sure your Stripe keys are in test environment

---

## 📈 Possible Improvements

- 📱 Advanced responsiveness (mobile-first)
- 🔔 Notifications (email/SMS/WhatsApp)
- 📊 Reports and analytics
- 👥 Permission control (multi-tenant per clinic 👀)
- 🧾 Integration with electronic medical records
- 📅 Integration with Google Calendar

---

## 🎯 Project Goal

This project was developed focusing on:

- Building scalable SaaS applications
- Integration with modern authentication (Better Auth)
- Using modern ORM (Drizzle)
- Implementing billing and subscriptions (Stripe)
- Fullstack architecture with Next.js

---

## 📄 License

This project is for educational purposes only.

---

## 🙌 Credits

Developed during the **Full Stack Club** 🚀
