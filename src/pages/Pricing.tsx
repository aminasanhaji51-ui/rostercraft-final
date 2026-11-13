import { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_PRICE, MAX_LOCATIONS, VOLUME_PRICE, monthlyPrice, yearlyPrice, type Billing } from '../lib/pricing';

function euros(amount: number): string {
  return `€${amount.toFixed(2)}`;
}

export default function Pricing() {
  const [locations, setLocations] = useState(1);
  const [billing, setBilling] = useState<Billing>('monthly');
  const tooFew = !Number.isInteger(locations) || locations < 1;
  const tooMany = locations > MAX_LOCATIONS;
  const perMonth = monthlyPrice(locations, billing);

  return (
    <section className="pricing">
      <h1>Pricing</h1>
      <p>One plan, priced per location. Every feature is included.</p>

      <div className="table-wrapper">
        <table className="plan-table">
          <thead>
            <tr>
              <th>Locations</th>
              <th>Price per location per month</th>
              <th>Annual billing</th>
              <th>Included</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1 to 10</td>
              <td>{euros(BASE_PRICE)}</td>
              <td>20% off the monthly total</td>
              <td>Rosters, availability, labour cost, mobile app</td>
            </tr>
            <tr>
              <td>11 to {MAX_LOCATIONS}</td>
              <td>{euros(VOLUME_PRICE)} from the 11th location</td>
              <td>20% off the monthly total</td>
              <td>Everything above, plus multi-site reports</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="card calculator">
        <h2>Your price</h2>
        <label htmlFor="locations">Number of locations</label>
        <input
          id="locations"
          type="number"
          min={1}
          max={MAX_LOCATIONS}
          value={locations}
          onChange={(event) => setLocations(Number(event.target.value))}
        />
        <fieldset>
          <legend>Billing</legend>
          <label>
            <input type="radio" name="billing" checked={billing === 'monthly'} onChange={() => setBilling('monthly')} />
            Monthly
          </label>
          <label>
            <input type="radio" name="billing" checked={billing === 'annual'} onChange={() => setBilling('annual')} />
            Annual
          </label>
        </fieldset>
        {tooFew ? (
          <p className="result error">Enter at least 1 location.</p>
        ) : tooMany ? (
          <p className="result">
            More than {MAX_LOCATIONS} locations? <Link to="/trial">Contact sales</Link>.
          </p>
        ) : (
          <p className="result">
            <strong>{euros(perMonth)}</strong> per month
            {billing === 'annual' && <span>, billed {euros(yearlyPrice(locations, billing))} per year</span>}
          </p>
        )}
      </div>
    </section>
  );
}
