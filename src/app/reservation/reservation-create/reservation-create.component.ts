import { Component, OnInit } from '@angular/core';
import { Reservation } from '../_models/reservation';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.component.html',
  styleUrls: ['./reservation-create.component.css']
})
export class ReservationCreateComponent implements OnInit {
  public reservation: Reservation = new Reservation();
  public submitted: boolean = false;

  constructor(
    private _reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this.reservation.reservationID = 0;
    this._reservationService
  }

}
