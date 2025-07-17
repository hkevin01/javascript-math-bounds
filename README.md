# JavaScript Math Bounds

## Project Overview
JavaScript Math Bounds provides modular utilities for geographic calculations, including degree/radian conversion, distance computation, and bounding box logic. The core distance calculation uses the **Haversine formula**, which is a well-known method for determining the great-circle distance between two points on a sphere given their longitudes and latitudes. This makes it ideal for accurate geographic distance measurements in mapping, GIS, and location-based applications.

## Installation
```bash
npm install
```

## Usage Example
```js
import { deg2rad, distances, isInBoundingBox } from './src/math.js';

const rad = deg2rad(90); // 1.5708
const dist = distances(-73.935242, 40.730610, -118.243683, 34.052235); // Distance between NYC and LA
const inside = isInBoundingBox(41, -73, 40, -74, { lat: 40.730610, lon: -73.935242 });
```

## Contribution Guidelines
- Fork the repository and create your branch from `master`.
- Write clear, modular code and add tests for new features.
- Submit pull requests with descriptive messages.
- See `CONTRIBUTING.md` for more details.

## License
MIT