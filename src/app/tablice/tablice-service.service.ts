import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabliceServiceService {
  constructor() {}
  tablice: TabliceInterface[] = [
    {
      city: 'ZG',
      numbers: '1234',
      chars: 'AB',
    },
    {
      city: 'VU',
      numbers: '511',
      chars: 'KH',
    },
  ];
}

export interface TabliceInterface {
  city: string;
  numbers: string;
  chars: string;
}
