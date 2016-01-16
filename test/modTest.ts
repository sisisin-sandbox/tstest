import * as assert from 'power-assert';
import {cnsl} from '../src/mod';

describe('cnsl', () => {
  it('should return console!', () => {
    assert(cnsl() === 'console!');
  });
});
