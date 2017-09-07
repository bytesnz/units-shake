import * as temperatureModule from '../temperature';
import makeTests from './lib/makeTests';

makeTests(temperatureModule, 'temperature', [
  {
    C: 25,
    F: 77,
    K: 298.15
  },
  {
    C: 0,
    F: 32,
    K: 273.15
  }
]);
