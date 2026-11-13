import { describe, expect, it } from 'vitest';
import { hoursSavedPerMonth, parseEmployeeCount } from './estimator';

describe('hoursSavedPerMonth', () => {
  it('saves 8 hours per month for 10 employees', () => {
    expect(hoursSavedPerMonth(10)).toBe(8);
  });

  it('rounds to one decimal', () => {
    expect(hoursSavedPerMonth(7)).toBe(5.6);
  });
});

describe('parseEmployeeCount', () => {
  it('accepts whole numbers from 1 to 500', () => {
    expect(parseEmployeeCount('1')).toBe(1);
    expect(parseEmployeeCount('500')).toBe(500);
  });

  it('refuses an empty field, 0, negative, decimal and too large values', () => {
    expect(parseEmployeeCount('')).toBeNull();
    expect(parseEmployeeCount('0')).toBeNull();
    expect(parseEmployeeCount('-5')).toBeNull();
    expect(parseEmployeeCount('2.5')).toBeNull();
    expect(parseEmployeeCount('501')).toBeNull();
  });
});
