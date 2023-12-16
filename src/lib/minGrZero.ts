export function minGrZero(array: number[]): number {
  let value = 0;
  const nonZero = array.filter((num) => num !== null && num > 0);
  if (nonZero.length > 0) {
    value = Math.min(...nonZero);
  }

  return value;
}
