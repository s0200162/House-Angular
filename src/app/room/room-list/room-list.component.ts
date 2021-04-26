import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_services/room.service';
import {Room} from '../_models/room'

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  public rooms: Room[] = [];

  constructor(private _roomService: RoomService) { }

  ngOnInit(): void {
    this._roomService.getRoom().subscribe(
      (results) => this.rooms = results
    );
  }

}
