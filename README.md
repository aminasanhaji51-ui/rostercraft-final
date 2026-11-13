# Rostercraft

Rostercraft builds staff schedules for restaurants and shops. This repository holds its marketing site: a time estimator, a pricing page and a free trial form.

## Run it

You need Node 24.

```bash
npm ci
npm run dev
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Starts the site on a local address |
| `npm run lint` | Checks the code with ESLint |
| `npm run typecheck` | Checks the types with TypeScript |
| `npm test` | Runs the unit tests with Vitest |
| `npm run build` | Builds the site into `dist` |
| `npm run ai -- <instructions> <input>` | Sends a file of instructions and one or more input files to the model, and prints its answer |
| `npm run test:e2e` | Runs the end-to-end tests with Playwright, locally or against `BASE_URL` |

## Environment variables

Copy `.env.example` to `.env.local` and fill in the values.

| Name | What it sets |
| --- | --- |
| `VITE_TRIAL_DAYS` | The length of the free trial, in days |
| `OPENAI_API_KEY`, `OPENAI_MODEL` | Your model key and model, for `npm run ai`; never prefixed with `VITE_` |
| `VITE_APP_ENV` | The environment shown in the banner of non-production deployments |

## Project documents

- [Test book](TEST-BOOK.md)
- [Release notes](RELEASE-NOTES.md)
- [Deployment procedure](DEPLOYMENT.md)
- [Incident of release 1.2](INCIDENT-1.2.md)

## User stories

### 1. Time estimator

As a restaurant manager, I want to see how many hours of scheduling Rostercraft saves me each month, so that I know whether a trial is worth it.

- With 1 to 500 employees, the estimator shows the hours saved per month: 12 minutes saved per employee per week, 4 weeks per month, rounded to one decimal.
- With an empty field, 0, a negative number or more than 500, the estimator shows "Enter a number of employees between 1 and 500." and no result.

### 2. Pricing

As the owner of several shops, I want to see the price for my number of locations and my billing period, so that I can budget for Rostercraft.

- Each of the first 10 locations costs €29 per month.
- Each location from the 11th costs €24 per month.
- Annual billing takes 20% off the monthly total; the page shows the price per month and the total per year.
- Prices show two decimals.
- From 1 to 50 locations the page shows a price; above 50 it shows "More than 50 locations? Contact sales." and no price.

### 3. Trial form

As a visitor, I want to start a free trial in a few seconds, so that I can try Rostercraft with my team.

- The full name is required, with at least 2 characters. Otherwise: "Enter your full name."
- The work email is required and valid: a name, `@`, a domain and an extension, such as `anna@bistro-lune.fr`. Otherwise: "Enter a valid work email."
- The number of locations is required. Otherwise: "Choose a number of locations."
- Each error shows next to its field; nothing is sent while an error remains.
- On success, the page thanks the visitor by first name and gives the length of the trial, such as "Thanks Anna, your 14-day free trial is ready."

### 4. Trial length

As the Rostercraft team, we want to set the trial length without changing the code, so that marketing can test offers.

- The length comes from `VITE_TRIAL_DAYS`, in days, between 7 and 30.
- When the variable is missing or invalid, the trial lasts 14 days.

### 5. On a phone

As a visitor on a phone, I want every page to fit my screen, so that I can read it without zooming.

- At 375 pixels wide, no page scrolls sideways.
- The navigation and the trial button stay reachable.
