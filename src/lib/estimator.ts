export const MINUTES_BY_HAND = 15;
export const MINUTES_WITH_ROSTERCRAFT = 3;
export const WEEKS_PER_MONTH = 4;
export const MIN_EMPLOYEES = 1;
export const MAX_EMPLOYEES = 500;

export function parseEmployeeCount(value: string): number | null {
  if (!/^\d+$/.test(value.trim())) {
    return null;
  }
  const employees = Number(value);
  return employees >= MIN_EMPLOYEES && employees <= MAX_EMPLOYEES ? employees : null;
}

export function hoursSavedPerMonth(employees: number): number {
  const minutesSaved = employees * (MINUTES_BY_HAND - MINUTES_WITH_ROSTERCRAFT) * WEEKS_PER_MONTH;
  return Math.round((minutesSaved / 60) * 10) / 10;
}
