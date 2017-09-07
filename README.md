# units-shake
Simple library of unit conversion functions that can be individually imported
as required (and minimised using tree shaking, hence the name).

## Currently Supported Conversions
### Pressure
- inches of mercury (inHg)
- millimeters of mercury (mmHg) or (torr)
- pounds per square inch (psi)
- kilopascals (kPa)
- millibars (mb) or hectopascals (hPa)
- pascal (Pa)
- bar

### Speed
- kilometers per hour (km/h)
- knots (kn)
- metres per second (m/s)
- miles per hour (mph)

### Temperature
- degrees fahrenheit (°F)
- degrees celsius (°C)
- kelvin (K)

## Typescript Usage
```typescript
import { degFtoC } from 'units-shake/ts/temperature';

console.log(`72°F equals ${degFtoC(72)}°C`);
```

## ES6 Usage
```javascript
import { degFtoC } from 'units-shake/temperature';

console.log(`72°F equals ${degFtoC(72)}°C`);
```

## ES5 Usage
```javascript
var temp = require('units-shake/es5/temperature');

console.log('72°F equals ' + degFtoC(72) + '°C');
```
