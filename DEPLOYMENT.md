# Deploying Rostercraft

## Environments

| Environment | Address | Deployed from |
| --- | --- | --- |
| Production | The production domain of the Vercel project | `main` |
| Preview | One address per branch and per pull request | Any other branch |
| Development | `npm run dev` on a laptop | The working copy |

## Variables

Set in Vercel, Settings, Environment Variables. A change applies to new deployments only: redeploy after changing a value.

| Name | Production | Preview | Development |
| --- | --- | --- | --- |
| `VITE_TRIAL_DAYS` | `14` | `21` | `14`, in `.env.local` |
| `VITE_APP_ENV` | `production` | `preview` | `development`, in `.env.local` |

## From a branch to production

1. Work on a branch, one story per branch.
2. Open a pull request: the CI workflow runs lint, type check, unit tests and build, and Vercel deploys a preview.
3. A teammate reads the diff and reruns the test cases of the story on the preview.
4. When the workflow is green and the review approves, merge into `main`: Vercel deploys production.
5. Rerun the test cases of the story on production.

## Rolling back

1. Whoever spots the problem tells the team and opens an issue.
2. In Vercel, Deployments, open the previous production deployment and choose Instant Rollback. On the free plan, only the immediately previous deployment is available.
3. Open a pull request that reverts the faulty change with `git revert`, and add the test that would have caught it.
4. After the merge, undo the rollback in Vercel, so that production follows `main` again.
5. Write the incident note: timeline, impact, cause, fix, prevention.

## Dependency watch

- Dependabot alerts are on for the repository.
- Once a week, `npm audit` runs locally; any high or critical vulnerability becomes an issue.
