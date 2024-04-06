import { Injectable, WritableSignal, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ManageParkingService {
  constructor() {}
  zone: WritableSignal<string> = signal('00000');
  smsNumber: WritableSignal<number> = signal(0o000);
  workingTimes: WritableSignal<string> = signal('0000000000'); // replace with opening, closing time, and Date type
  closingIn: WritableSignal<number> = signal(0o00000); // replace with logic from Date-s time until closing
  timePaid: WritableSignal<number> = signal(0o00000);
  note: WritableSignal<string> = signal('00000000000000');

  setNote(e: any) {
    this.note.set(e.target.value);
  }
  decreaseTime() {
    if (this.timePaid() > 60) {
      this.timePaid.update((time) => time - 60);
    }
  }
  increaseTime() {
    this.timePaid.update((time) => time + 60);
  }
}
