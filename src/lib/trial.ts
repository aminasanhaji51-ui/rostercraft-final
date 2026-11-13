export type TrialForm = {
  fullName: string;
  email: string;
  locations: string;
};

export type TrialErrors = Partial<Record<keyof TrialForm, string>>;

export const DEFAULT_TRIAL_DAYS = 14;
export const MIN_TRIAL_DAYS = 7;
export const MAX_TRIAL_DAYS = 30;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateTrialForm(form: TrialForm): TrialErrors {
  const errors: TrialErrors = {};
  if (form.fullName.trim().length < 2) {
    errors.fullName = 'Enter your full name.';
  }
  if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = 'Enter a valid work email.';
  }
  if (!form.locations) {
    errors.locations = 'Choose a number of locations.';
  }
  return errors;
}

export function firstName(fullName: string): string {
  return fullName.trim().split(/\s+/)[0];
}

export function trialDays(value: string | undefined = import.meta.env.VITE_TRIAL_DAYS): number {
  const days = Number(value);
  if (!value || !Number.isInteger(days) || days < MIN_TRIAL_DAYS || days > MAX_TRIAL_DAYS) {
    return DEFAULT_TRIAL_DAYS;
  }
  return days;
}
