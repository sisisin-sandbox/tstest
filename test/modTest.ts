import * as assert from 'power-assert';
import {cnsl, num} from '../src/mod';

describe('cnsl', () => {
  it('should return console!', () => {
    assert(cnsl() === 'console!');
  });
});

describe('num', () => {
  it('should return 3', () => {
    assert(num() === 3);
  });
});
