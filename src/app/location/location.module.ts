import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationListComponent } from './location-list/location-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from './_services/location.service';
import { LocationCreateComponent } from './location-create/location-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LocationListComponent, LocationCreateComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers:[
    LocationService
  ]
})
export class LocationModule { }
