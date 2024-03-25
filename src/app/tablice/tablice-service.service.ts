import { Injectable, WritableSignal, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TabliceServiceService {
  constructor() {}
  tablice: WritableSignal<TabliceInterface[]> = signal([
    // { city: 'ZG', numbers: '1234', chars: 'BB' },
  ]);
}

export interface TabliceInterface {
  city: string;
  numbers: string;
  chars: string;
}
