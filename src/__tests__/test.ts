import { hilbertTransform } from '../index';

describe('test hilbert transform of cos(t)', () => {
  it('test hilbert transform of cos -> sin function', () => {
    const length = 50;
    const cos = new Array(length).fill(0).map((_, i) => Math.cos(i));
    const sin = new Array(length).fill(0).map((_, i) => Math.sin(i));

    const cos2 = new Array(5).fill(0).map((_, i) => Math.cos(i));
    console.log(hilbertTransform(cos2));

    const result = [0.015, 0.966, 1.058, 0.333, -0.367];

    const trs = hilbertTransform(cos);
    expect(trs[5]).toBeCloseTo(sin[5], 1);
    expect(trs[10]).toBeCloseTo(sin[10], 1);
    expect(trs[11]).toBeCloseTo(sin[11], 1);
    expect(trs[12]).toBeCloseTo(sin[12], 1);
    expect(trs[13]).toBeCloseTo(sin[13], 1);
    expect(trs[14]).toBeCloseTo(sin[14], 1);
    expect(trs[15]).toBeCloseTo(sin[15], 1);
    expect(trs[20]).toBeCloseTo(sin[20], 1);
    expect(trs[30]).toBeCloseTo(sin[30], 1);
    expect(trs[40]).toBeCloseTo(sin[40], 1);
  });

  it('test hilbert transform of sin -> -cos function', () => {
    const length = 50;
    const minusCos = new Array(length).fill(0).map((_, i) => -Math.cos(i));
    const sin = new Array(length).fill(0).map((_, i) => Math.sin(i));
    const trs = hilbertTransform(sin);
    expect(trs[10]).toBeCloseTo(minusCos[10], 1);
    expect(trs[11]).toBeCloseTo(minusCos[11], 1);
    expect(trs[12]).toBeCloseTo(minusCos[12], 1);
    expect(trs[13]).toBeCloseTo(minusCos[13], 1);
    expect(trs[14]).toBeCloseTo(minusCos[14], 1);
    expect(trs[15]).toBeCloseTo(minusCos[15], 1);
    expect(trs[20]).toBeCloseTo(minusCos[20], 1);
    expect(trs[30]).toBeCloseTo(minusCos[30], 1);
    expect(trs[40]).toBeCloseTo(minusCos[40], 1);
  });
});
