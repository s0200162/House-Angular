import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { HttpClientModule } from '@angular/common/http';
import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDeleteComponent } from './reservation-delete/reservation-delete.component';
import { ReservationUpdateComponent } from './reservation-update/reservation-update.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ReservationListComponent,
    ReservationCreateComponent,
    ReservationDeleteComponent,
    ReservationUpdateComponent,
    ReservationDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class ReservationModule { }
