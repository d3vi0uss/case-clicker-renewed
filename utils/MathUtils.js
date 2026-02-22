export const MathUtils = {
  clamp: (v, min, max) => Math.min(max, Math.max(min, v)),
  lerp: (a, b, t) => a + (b - a) * t,
  triangularRandom(rng, min = 0, max = 1, mode = 0.5) {
    const u = rng();
    const c = (mode - min) / (max - min);
    if (u < c) return min + Math.sqrt(u * (max - min) * (mode - min));
    return max - Math.sqrt((1 - u) * (max - min) * (max - mode));
  },
};
