import { Injectable, WritableSignal, signal } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
export class ManageParkingService {
  constructor() {}
  name: WritableSignal<string> = signal('');
  smsNumber: WritableSignal<number> = signal(0);
  openingTime: WritableSignal<Date> = signal(new Date(0, 0, 0, 0, 0));
  closingTime: WritableSignal<Date> = signal(new Date(0, 0, 0, 0, 0));
  timePaid: WritableSignal<number> = signal(60);
  note: WritableSignal<string> = signal('');

  decreaseTime() {
    if (this.timePaid() > 60) {
      this.timePaid.update((time) => time - 60);
    }
  }
  increaseTime() {
    this.timePaid.update((time) => time + 60);
  }

  setParking(
    name: string,
    smsNumber: number,
    openingTime: Date,
    closingTime: Date
  ) {
    this.name.set(name);
    this.smsNumber.set(smsNumber);
    this.openingTime.set(openingTime);
    this.closingTime.set(closingTime);
  }

  calculateWorkingTime(): string {
    var openingTime = this.openingTime();
    var closingTime = this.closingTime();
    const openingHours = String(openingTime.getHours()).padStart(2, '0');
    const openingMinutes = String(openingTime.getMinutes()).padStart(2, '0');
    const openingFormatted = `${openingHours}:${openingMinutes}`;

    const closingHours = String(closingTime.getHours()).padStart(2, '0');
    const closingMinutes = String(closingTime.getMinutes()).padStart(2, '0');
    const closingFormatted = `${closingHours}:${closingMinutes}`;

    return `${openingFormatted}-${closingFormatted}`;
  }

  calculateClosingTime(): number {
    var closingTime = this.closingTime();
    // Get the current time
    const now = new Date();

    // Extract hours and minutes from both times (current and closing)
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    const closingHour = closingTime.getHours();
    const closingMinute = closingTime.getMinutes();

    // Calculate the difference in minutes considering edge cases
    let minutesUntilClosing =
      closingHour * 60 + closingMinute - (currentHour * 60 + currentMinute);
    if (minutesUntilClosing < 0) {
      minutesUntilClosing = 0; // Handle case when closing time has passed
    }

    return minutesUntilClosing;
  }
}
