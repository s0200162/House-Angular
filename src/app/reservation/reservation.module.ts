import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ReservationListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class ReservationModule { }
