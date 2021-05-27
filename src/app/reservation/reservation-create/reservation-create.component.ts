import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/location/_services/location.service';
import { Room } from 'src/app/room/_models/room';
import { RoomService } from 'src/app/room/_services/room.service';
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
  locations;
  selectedLocation;
  rooms;
  selectedRoom;
  room : Room;
  periods;
  selectedPeriod;
  customers;
  customer;
  public postResponse: any;

  constructor(
    private _reservationService: ReservationService,
    private _locationService: LocationService,
    private _roomService: RoomService
  ) { }

  ngOnInit(): void {
    this._locationService.getLocations().subscribe(locres => {
      this.locations = locres;
    })
  }

  onSubmit(): void {
    this.reservation.reservationID = 0;
    this.reservation.customerID = JSON.parse(localStorage.getItem('currentUser')).customerID;
    this.reservation.roomID = this.selectedRoom.roomID;
    this.reservation.periodID = this.selectedPeriod;
    this.reservation.price = this.selectedRoom.priceHour * 2;
    this._reservationService.addReservation(this.reservation).subscribe(res => {
      this.postResponse = res
    });
    this.submitted = true;
    console.log(this.reservation)
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

