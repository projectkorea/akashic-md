export function easeOutExpo(t: number, b: number, c: number, d: number): number {
  return t === d ? b + c : c * (-(2 ** -((10 * t) / d)) + 1) + b + 1;
}
