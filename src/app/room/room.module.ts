import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RoomCreateComponent } from './room-create/room-create.component';
import { FormsModule } from '@angular/forms';
import { RoomService } from './_services/room.service';
import { LocationService } from '../location/_services/location.service';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomUpdateComponent } from './room-update/room-update.component';



@NgModule({
  declarations: [
    RoomListComponent,
    RoomCreateComponent,
    RoomDetailsComponent,
    RoomUpdateComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    RoomService,
    LocationService
  ]
})
export class RoomModule { }
