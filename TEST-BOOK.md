# Rostercraft test book

Run on the production address of the site, in a laptop browser and at 375 pixels wide. Expected results are computed by hand from the user stories in the README.

## Time estimator

Preconditions: the home page is open. Steps: type the input in Number of employees and read the result.

| Id | Input | Expected result |
| --- | --- | --- |
| TC-01 | 10 | 8 hours of scheduling saved per month |
| TC-02 | 1 | 0.8 hours of scheduling saved per month |
| TC-03 | 500 | 400 hours of scheduling saved per month |
| TC-04 | Empty field | A message asks for 1 to 500 employees; no result |
| TC-05 | 0 | Same message, no result |
| TC-06 | 501 | Same message, no result |
| TC-07 | -5 | Same message, no result |

## Pricing

Preconditions: `/pricing` is open. Steps: type the number of locations, choose the billing period, read the result.

| Id | Input | Expected result |
| --- | --- | --- |
| TC-08 | 1 location, monthly | €29.00 per month |
| TC-09 | 10 locations, monthly | €290.00 per month |
| TC-10 | 11 locations, monthly | €314.00 per month |
| TC-11 | 1 location, annual | €23.20 per month, billed €278.40 per year |
| TC-12 | 12 locations, annual | €270.40 per month, billed €3244.80 per year |
| TC-13 | 50 locations, monthly | €1250.00 per month |
| TC-14 | 51 locations | An invitation to contact sales, no price |

## Trial form

Preconditions: `/trial` is open, on a deployment where `VITE_TRIAL_DAYS` is `14`. Steps: fill the form and click Start my free trial.

| Id | Input | Expected result |
| --- | --- | --- |
| TC-15 | Anna Petit, anna@bistro-lune.fr, 1 location | "Thanks Anna, your 14-day free trial is ready." |
| TC-16 | Empty name, anna@bistro-lune.fr, 1 location | "Enter your full name." next to the name |
| TC-17 | Anna Petit, anna@, 1 location | "Enter a valid work email." next to the email |
| TC-18 | Anna Petit, anna@bistro-lune.fr, no number of locations | "Choose a number of locations." next to the field |

## Trial length and phone layout

| Id | Preconditions and input | Expected result |
| --- | --- | --- |
| TC-19 | `VITE_TRIAL_DAYS` is `21`; the form of TC-15 | A 21-day free trial |
| TC-20 | `VITE_TRIAL_DAYS` is missing; the form of TC-15 | A 14-day free trial |
| TC-21 | `VITE_TRIAL_DAYS` is `45`; the form of TC-15 | A 14-day free trial |
| TC-22 | `/pricing` at 375 pixels wide | The page does not scroll sideways |
| TC-23 | The home page and `/trial` at 375 pixels wide | No sideways scrolling; navigation and trial button visible |

## Campaign on version 1.0

Production, commit "Rostercraft site 1.0", laptop and 375 pixels. 23 cases: 13 passed, 7 failed, 3 blocked. Only the cases that did not pass are listed.

| Id | Obtained result | Status |
| --- | --- | --- |
| TC-04 | "NaN hours of scheduling saved per month" | Fail |
| TC-05 | "0 hours of scheduling saved per month" | Fail |
| TC-06 | "400.8 hours of scheduling saved per month" | Fail |
| TC-07 | "-4 hours of scheduling saved per month" | Fail |
| TC-12 | "€216.32 per month, billed €2595.84 per year" | Fail |
| TC-17 | "Thanks Anna, your 14-day free trial is ready." | Fail |
| TC-19 to TC-21 | Not run: production has `VITE_TRIAL_DAYS` set to `14` | Blocked |
| TC-22 | The page is 736 pixels wide and scrolls sideways | Fail |

Exploration of the pricing calculator also found that 0 locations shows "€0.00 per month" and -2 locations "€-58.00 per month".

All 23 cases pass on version 1.1, the trial length cases on previews configured with each value.
