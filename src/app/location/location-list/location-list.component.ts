import { Component, OnInit } from '@angular/core';
import { LocationService } from '../_services/location.service';
import { Location } from '../_models/location';
import { AuthenticationService } from 'src/app/_services/authentication.service'

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit {
  public locations: Location[] = [];

  constructor(private _locationService: LocationService) { }

  ngOnInit(): void {
    this._locationService.getLocations().subscribe(
      (results) => {this.locations = results}
    ); 
  }

}
