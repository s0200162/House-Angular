import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomCreateComponent } from './room-create/room-create.component';



@NgModule({
  declarations: [RoomListComponent, RoomCreateComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class RoomModule { }
