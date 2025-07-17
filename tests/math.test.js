import { deg2rad, distances, isInBoundingBox } from '../src/math.js';

describe('deg2rad', () => {
  it('converts degrees to radians', () => {
    expect(deg2rad(180)).toBeCloseTo(Math.PI);
    expect(deg2rad(90)).toBeCloseTo(Math.PI / 2);
  });
});

describe('distances', () => {
  it('calculates distance between two points', () => {
    const dist = distances(-73.935242, 40.730610, -118.243683, 34.052235);
    expect(dist).toBeGreaterThan(3000);
  });
});

describe('isInBoundingBox', () => {
  it('returns true if point is inside bounding box', () => {
    expect(isInBoundingBox(41, -73, 40, -74, { lat: 40.730610, lon: -73.935242 })).toBe(true);
  });
  it('returns false if point is outside bounding box', () => {
    expect(isInBoundingBox(41, -73, 40, -74, { lat: 39, lon: -75 })).toBe(false);
  });
});
