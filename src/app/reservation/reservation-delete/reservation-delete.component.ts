import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-reservation-delete',
  templateUrl: './reservation-delete.component.html',
  styleUrls: ['./reservation-delete.component.css']
})
export class ReservationDeleteComponent implements OnInit {

  reservationID = 0;
  reservation
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _reservationService: ReservationService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => { 
      this.reservationID = data.id;
    });

    this._reservationService.getReservationById(this.reservationID).subscribe(results => {
      this.reservation = results;
    })
  }

  onSubmit(): void {
    this._reservationService.deleteReservation(this.reservationID).subscribe(result => {
      this.reservation = result;
    })
  }

}
