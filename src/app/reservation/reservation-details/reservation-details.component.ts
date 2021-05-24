import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.component.html',
  styleUrls: ['./reservation-details.component.css']
})
export class ReservationDetailsComponent implements OnInit {
  reservationID = 0;
  reservation
  constructor(
    private _reservationService: ReservationService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.reservationID = data.id;
      console.log(data)
    });

    this._reservationService.getReservationById(this.reservationID).subscribe(results => {
      this.reservation = results;
      console.log(results)
    });
  }

}
