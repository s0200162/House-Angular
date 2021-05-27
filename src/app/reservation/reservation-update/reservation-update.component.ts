import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/location/_services/location.service';
import { Room } from 'src/app/room/_models/room';
import { RoomService } from 'src/app/room/_services/room.service';
import { ReservationService } from '../_services/reservation.service';

@Component({
  selector: 'app-reservation-update',
  templateUrl: './reservation-update.component.html',
  styleUrls: ['./reservation-update.component.css']
})
export class ReservationUpdateComponent implements OnInit {
  reservationID = 0;
  reservation;
  locations;
  selectedLocation;
  rooms;
  selectedRoom;
  room : Room;
  periods;
  selectedPeriod;
  customers;
  customer;


  constructor(
    private _reservationService: ReservationService,
    private _locationService: LocationService,
    private _roomService: RoomService,
    private _activatedRoute: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.reservationID = data.id;
    })

    this._reservationService.getReservationById(this.reservationID).subscribe(results => {
      this.reservation = results;
    })

    this._locationService.getLocations().subscribe(res => {
      this.locations = res;
    })


  }

  onSubmit(): void {
    this.reservation.reservationID = this.reservationID;
    this.reservation.roomID = this.selectedRoom;
    this.reservation.periodID = this.selectedPeriod;
    this.reservation.price = this.selectedRoom.priceHour * 2;
    this._reservationService.updateReservation(this.reservationID, this.reservation)
    .subscribe(resu => {this.reservation = resu});

  }

  FetchRooms(): void {
    this._roomService.getRoomByLocation(this.selectedLocation).subscribe(roomres => {
    this.rooms = roomres;
  })
}
  FetchPeriods(): void {
    this._reservationService.getPeriods(this.selectedRoom.roomID, this.reservation.date).subscribe(periodres => {
      this.periods = periodres
    })
  }

}
