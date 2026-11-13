import { useState, type FormEvent } from 'react';
import { firstName, trialDays, validateTrialForm, type TrialErrors, type TrialForm } from '../lib/trial';

const EMPTY_FORM: TrialForm = { fullName: '', email: '', locations: '' };

export default function Trial() {
  const [form, setForm] = useState<TrialForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<TrialErrors>({});
  const [sentTo, setSentTo] = useState<string | null>(null);

  function update(field: keyof TrialForm, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function submit(event: FormEvent) {
    event.preventDefault();
    const found = validateTrialForm(form);
    setErrors(found);
    if (Object.keys(found).length === 0) {
      setSentTo(firstName(form.fullName));
    }
  }

  if (sentTo) {
    return (
      <section className="card confirmation">
        <h1>Welcome aboard</h1>
        <p>
          Thanks {sentTo}, your {trialDays()}-day free trial is ready. Check your inbox to set your password.
        </p>
      </section>
    );
  }

  return (
    <section className="card trial">
      <h1>Start your free trial</h1>
      <form onSubmit={submit} noValidate>
        <label htmlFor="fullName">Full name</label>
        <input id="fullName" value={form.fullName} onChange={(event) => update('fullName', event.target.value)} />
        {errors.fullName && <p className="error">{errors.fullName}</p>}

        <label htmlFor="email">Work email</label>
        <input id="email" type="email" value={form.email} onChange={(event) => update('email', event.target.value)} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="locations">Number of locations</label>
        <select id="locations" value={form.locations} onChange={(event) => update('locations', event.target.value)}>
          <option value="">Choose</option>
          <option value="1">1</option>
          <option value="2-5">2 to 5</option>
          <option value="6-20">6 to 20</option>
          <option value="21+">More than 20</option>
        </select>
        {errors.locations && <p className="error">{errors.locations}</p>}

        <button type="submit" className="button">
          Start my free trial
        </button>
      </form>
    </section>
  );
}
