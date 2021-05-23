import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../_services/location.service';

@Component({
  selector: 'app-location-delete',
  templateUrl: './location-delete.component.html',
  styleUrls: ['./location-delete.component.css']
})
export class LocationDeleteComponent implements OnInit {

  locationID = 0;
  location;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _locationService: LocationService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => { 
      this.locationID = data.id;
    });

    this._locationService.getLocationById(this.locationID).subscribe(results => {
      this.location = results;
    })
  }

  onSubmit(): void {
    this._locationService.deleteLocation(this.locationID).subscribe(result => {
      this.location = result;
    })
  }

}
