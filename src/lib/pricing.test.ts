import { describe, expect, it } from 'vitest';
import { monthlyPrice, yearlyPrice } from './pricing';

describe('monthlyPrice', () => {
  it('charges 29 per location per month', () => {
    expect(monthlyPrice(1, 'monthly')).toBe(29);
    expect(monthlyPrice(10, 'monthly')).toBe(290);
  });

  it('charges 24 for each location from the 11th', () => {
    expect(monthlyPrice(11, 'monthly')).toBe(314);
  });

  it('takes 20% off the monthly total with annual billing', () => {
    expect(monthlyPrice(1, 'annual')).toBe(23.2);
    expect(monthlyPrice(10, 'annual')).toBe(232);
  });

  it('applies the annual discount once above 10 locations', () => {
    expect(monthlyPrice(11, 'annual')).toBe(251.2);
    expect(monthlyPrice(12, 'annual')).toBe(270.4);
  });
});

describe('yearlyPrice', () => {
  it('bills twelve months of the annual price', () => {
    expect(yearlyPrice(1, 'annual')).toBe(278.4);
    expect(yearlyPrice(12, 'annual')).toBe(3244.8);
  });
});
