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

### Length
- meters (m)
- kilometers (km)
- millimeters (mm)
- miles (mi)
- yards (yd)
- feet (ft)
- feet and inches (f'i")
- inches (in)
- mils (mil)

# Usage
All conversion functions are in the format ``${type}${fromUnit}to${toUnit}``.
`${type}` the type of value it is, e.g. `pressure`, `temperature`, `speed`, or
`length`.
`${fromUnit}` is the unit you want to convert from.
`${toUnit}` is the unit you want to convert to.
The units are those that are listed above without alphabetic characters,
e.g. `inHg`, `bar`, `kmh', and `C`

## Typescript Usage
```typescript
import { temperatureFtoC } from 'units-shake/ts/temperature';

console.log(`72°F equals ${temperatureFtoC(72)}°C`);
```

## ES6 Usage
```javascript
import { temperatureFtoC } from 'units-shake/temperature';

console.log(`72°F equals ${temperatureFtoC(72)}°C`);
```

## ES5 Usage
```javascript
var temp = require('units-shake/es5/temperature');

console.log('72°F equals ' + temperatureFtoC(72) + '°C');
```
