import { Component, OnInit } from '@angular/core';
import { RoomService } from '../_services/room.service'
import { Room } from '../_models/room'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-room-create',
  templateUrl: './room-create.component.html',
  styleUrls: ['./room-create.component.css']
})
export class RoomCreateComponent implements OnInit {
  public room: Room = new Room();
  public submitted: boolean = false;
  public postResponse: any;

  constructor(private _roomService: RoomService) { 
    
  }

  ngOnInit(): void {
    this.room.roomID = 0;
    this._roomService.addRoom(this.room)
    .subscribe(result => {this.postResponse = result});
    this.submitted = true;
  }

}
