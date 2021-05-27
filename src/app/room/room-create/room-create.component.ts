import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_services/room.service'
import { Room } from '../_models/room'
import { HttpClient } from '@angular/common/http';
import { LocationService } from 'src/app/location/_services/location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {
  public room: Room = new Room();
  public submitted: boolean = false;
  public postResponse: any;
  locations;
  selectedLocation;

  constructor(
    private _roomService: RoomService,
    private _locationService: LocationService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this._locationService.getLocations().subscribe(results => {
      this.locations = results;
    })
  }

  onSubmit(): void {
    this.room.roomID = 0;
    this.room.locationID = this.selectedLocation;
    this._roomService.addRoom(this.room)
    .subscribe(result => {this.postResponse = result});
    this.submitted = true;
    this.router.navigate(['rooms'])
  }

}
