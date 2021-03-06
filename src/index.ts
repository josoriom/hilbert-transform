/**
 * Performs the Hilbert transform
 * @returns A new vector with 90 degree shift regarding the phase of the original function
 */

export function hilbertTransform(input: number[]) {
  const array = [0, 0].concat(input).concat(0);
  const result: number[] = [];
  for (let k = 2; k < array.length - 1; k++) {
    let aSum = 0;
    for (let i = 1; i < k - 1; i++) {
      const log = Math.log((k - i) / (k - i - 1));
      aSum += array[i] * log + (array[i + 1] - array[i]) * (-1 + (k - i) * log);
    }
    const b = array[k - 1] - array[k + 1];
    let cSum = 0;
    for (let i = k + 1; i < array.length - 1; i++) {
      const log = Math.log((i - k) / (i - k + 1));
      cSum += array[i] * log + (array[i - 1] - array[i]) * (1 + (i - k) * log);
    }
    result.push((aSum + b + cSum) / Math.PI);
  }
  return result;
}
