import { useState } from 'react';
import { MAX_EMPLOYEES, MIN_EMPLOYEES, hoursSavedPerMonth, parseEmployeeCount } from '../lib/estimator';

export default function TimeEstimator() {
  const [value, setValue] = useState('10');
  const employees = parseEmployeeCount(value);

  return (
    <section className="card estimator" aria-labelledby="estimator-title">
      <h2 id="estimator-title">How much time could you save?</h2>
      <label htmlFor="employees">Number of employees</label>
      <input
        id="employees"
        type="number"
        inputMode="numeric"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      {employees === null ? (
        <p className="result error">
          Enter a number of employees between {MIN_EMPLOYEES} and {MAX_EMPLOYEES}.
        </p>
      ) : (
        <p className="result">
          <strong>{hoursSavedPerMonth(employees)}</strong> hours of scheduling saved per month
        </p>
      )}
      <p className="hint">15 minutes per employee per week by hand, 3 minutes with Rostercraft.</p>
    </section>
  );
}
