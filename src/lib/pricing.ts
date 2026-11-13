export type Billing = 'monthly' | 'annual';

export const BASE_PRICE = 29;
export const VOLUME_PRICE = 24;
export const LOCATIONS_AT_BASE_PRICE = 10;
export const ANNUAL_DISCOUNT = 0.2;
export const MAX_LOCATIONS = 50;

function roundToCents(amount: number): number {
  return Math.round(amount * 100) / 100;
}

export function monthlyPrice(locations: number, billing: Billing): number {
  const discount = billing === 'annual' ? ANNUAL_DISCOUNT : 0;
  const atBasePrice = Math.min(locations, LOCATIONS_AT_BASE_PRICE) * BASE_PRICE;
  const atVolumePrice = Math.max(locations - LOCATIONS_AT_BASE_PRICE, 0) * VOLUME_PRICE;
  return roundToCents((atBasePrice + atVolumePrice) * (1 - discount));
}

export function yearlyPrice(locations: number, billing: Billing): number {
  return roundToCents(monthlyPrice(locations, billing) * 12);
}
