// move to database

import { LatLngExpression } from 'leaflet';
import * as L from 'leaflet';
export const zones: ZoneInterface[] = [
  {
    metadata: {
      name: 'Zona 1',
      smsNumber: 708321,
      openingTime: new Date(0, 0, 0, 8, 0),
      closingTime: new Date(0, 0, 0, 20, 0),
    },
    polygon: L.polygon(
      [
        [
          [45.35498385770991, 19.002377986907963],
          [45.35393588744126, 18.99840295314789],
          [45.35220179329461, 19.000537991523746],
          [45.353351579044784, 19.00398194789887],
        ],
      ],
      { color: '#FFFF00' }
    ),
  },
  {
    metadata: {
      name: 'Zona 2',
      smsNumber: 708322,
      openingTime: new Date(0, 0, 0, 7, 0),
      closingTime: new Date(0, 0, 0, 19, 0),
    },
    polygon: L.polygon(
      [
        [
          [45.35890791930652, 18.99267375469208],
          [45.3571098960411, 18.996235728263855],
          [45.35596395622605, 18.995028734207157],
          [45.35821811839369, 18.99120926856995],
        ],
      ],
      { color: '#0000FF' }
    ),
  },
];

interface ZoneInterface {
  metadata: {
    name: string;
    smsNumber: number;
    openingTime: Date;
    closingTime: Date;
    // color: string;
  };
  polygon: any;
}
