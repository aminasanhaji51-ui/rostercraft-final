import { describe, expect, it } from 'vitest';
import { firstName, trialDays, validateTrialForm } from './trial';

describe('validateTrialForm', () => {
  it('accepts a complete form', () => {
    const errors = validateTrialForm({ fullName: 'Anna Petit', email: 'anna@bistro-lune.fr', locations: '1' });
    expect(errors).toEqual({});
  });

  it('asks for a full name', () => {
    const errors = validateTrialForm({ fullName: '', email: 'anna@bistro-lune.fr', locations: '1' });
    expect(errors.fullName).toBe('Enter your full name.');
  });

  it('refuses an email without a domain or an extension', () => {
    for (const email of ['anna@', 'anna@bistro', '@bistro-lune.fr', 'anna bistro-lune.fr']) {
      const errors = validateTrialForm({ fullName: 'Anna Petit', email, locations: '1' });
      expect(errors.email).toBe('Enter a valid work email.');
    }
  });
});

describe('firstName', () => {
  it('keeps the first word of the full name', () => {
    expect(firstName('  Anna Petit ')).toBe('Anna');
  });
});

describe('trialDays', () => {
  it('reads a length between 7 and 30 days', () => {
    expect(trialDays('7')).toBe(7);
    expect(trialDays('30')).toBe(30);
  });

  it('falls back to 14 days when the value is missing or invalid', () => {
    expect(trialDays(undefined)).toBe(14);
    expect(trialDays('')).toBe(14);
    expect(trialDays('abc')).toBe(14);
    expect(trialDays('6')).toBe(14);
    expect(trialDays('31')).toBe(14);
  });
});
