import * as speedModule from '../speed';
import makeTests from './lib/makeTests';

makeTests(speedModule, 'speed', [
  {
    ms: 10,
    kmh: 36,
    kn: 19.4384,
    mph: 22.3694
  }
]);
