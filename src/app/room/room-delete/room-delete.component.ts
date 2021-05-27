import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../_services/room.service';

@Component({
  selector: 'app-room-delete',
  templateUrl: './room-delete.component.html',
  styleUrls: ['./room-delete.component.css']
})
export class RoomDeleteComponent implements OnInit {

roomID = 0;
room;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _roomService: RoomService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.roomID = data.id;
    })

    this._roomService.getRoomById(this.roomID).subscribe(results => {
      this.room = results;
    })
  }

  onSubmit(): void {
    this._roomService.deleteRoom(this.roomID).subscribe(result => {
      this.room = result;
      this.router.navigate(['rooms'])
    })
  }

}
