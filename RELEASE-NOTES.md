# Release notes

## 1.1.0

- The time estimator asks for 1 to 500 employees instead of showing `NaN` or a negative result.
- The annual discount is applied once on the monthly total, whatever the number of locations.
- The trial form refuses an email without a domain or an extension.
- The free trial lasts 14 days when its length is not set or not valid.
- The pricing table fits a phone screen.
- Previews show a banner, so nobody mistakes them for the live site.

## 1.2.0, rolled back

Prices computed in cents. The yearly total was shown a hundred times too high; the release was rolled back, then reverted. See `INCIDENT-1.2.md`.
