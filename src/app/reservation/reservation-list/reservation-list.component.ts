import { Component, OnInit } from '@angular/core';
import { ReservationService } from '../_services/reservation.service';
import {Reservation} from '../_models/reservation'

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.css']
})
export class ReservationListComponent implements OnInit {
  public reservations: Reservation[] = [];

  constructor(private _reservationService: ReservationService) { }

  ngOnInit(): void {
    this._reservationService.getReservation().subscribe(
      (results) => this.reservations = results
    );
  }

}
