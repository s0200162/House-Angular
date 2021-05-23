import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../_services/room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {
  roomID = 0;
  room;

  constructor(
    private _roomService: RoomService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.roomID = data.id;
      console.log(data)
    });

    this._roomService.getRoomById(this.roomID).subscribe(results => {
      this.room = results;
      console.log(results)
    });
  }

}
