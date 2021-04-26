import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [RoomListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class RoomModule { }
