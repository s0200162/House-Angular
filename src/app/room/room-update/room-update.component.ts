import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LocationService } from 'src/app/location/_services/location.service';
import { RoomService } from '../_services/room.service';

@Component({
  selector: 'app-room-update',
  templateUrl: './room-update.component.html',
  styleUrls: ['./room-update.component.css']
})
export class RoomUpdateComponent implements OnInit {
  roomID = 0;
  room;
  public submitted: boolean = false;
  locations;
  selectedLocation;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _roomService: RoomService,
    private _locationService: LocationService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.roomID = data.id;
    })

    this._locationService.getLocations().subscribe(res => {
      this.locations = res;
    })

    this._roomService.getRoomById(this.roomID).subscribe( results => {
      this.room = results;
    })
  }

  onSubmit(): void {
    this.room.roomID = this.roomID;
    this.room.locationID = this.selectedLocation;
    console.log(this.room)
    this._roomService.updateRoom(this.roomID, this.room)
      .subscribe(result => {this.room = result});
      this.submitted = true;
      this.router.navigate(['rooms'])
  }

}
