import makeTests from './lib/makeTests'
import * as conversionModule from '../length';

makeTests(conversionModule, 'length', [
  {
    km: 1,
    m: 1000,
    mm: 1000000,
    mi: 0.6214,
    yd: 1093.6,
    ft: 3280.8,
    in: 39370,
    mil: 39370000,
  }
]);
