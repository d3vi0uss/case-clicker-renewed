export const TimeUtils = {
  now: () => performance.now(),
  toISO: (ts = Date.now()) => new Date(ts).toISOString(),
  dayMs: 86400000,
};
