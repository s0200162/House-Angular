import { Reservation } from './_models/reservation';

describe('Reservation', () => {
  it('should create an instance', () => {
    expect(new Reservation()).toBeTruthy();
  });
});
