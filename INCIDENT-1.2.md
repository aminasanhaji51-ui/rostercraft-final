# Incident: wrong yearly total after release 1.2

## Timeline

- Release 1.2 merged on `main`; the workflow passed and production was deployed.
- A few minutes later, test case TC-11 failed on production: €27840.00 per year instead of €278.40.
- Production rolled back to the 1.1 deployment with Instant Rollback.
- A pull request reverted release 1.2 and added a unit test on the yearly total; the workflow passed, the pull request was merged.
- The rollback was undone, so that production follows `main` again.

## Impact

Every visitor who chose annual billing saw a yearly total a hundred times too high, during the minutes between the release and the rollback.

## Cause

Release 1.2 moved prices to cents. The monthly price was divided by 100 on the page, the yearly total was not. The yearly total was computed in the page component, where no test runs.

## Fix and prevention

- The yearly total now comes from `yearlyPrice` in `src/lib/pricing.ts`, covered by a unit test.
- Every amount shown on the pricing page comes from a tested function of `src/lib`.
- Release 1.2 will come back with its own test of the yearly total.
