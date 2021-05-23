import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../_services/location.service';

@Component({
  selector: 'app-location-update',
  templateUrl: './location-update.component.html',
  styleUrls: ['./location-update.component.css']
})
export class LocationUpdateComponent implements OnInit {
  locationID = 0;
  location;
  public submitted: boolean = false;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _locationService: LocationService
  ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.locationID = data.id;
    })

    this._locationService.getLocationById(this.locationID).subscribe(results => {
      this.location = results;
    })
  }

  onSubmit(): void {
    this._locationService.updateLocation(this.locationID, this.location)
      .subscribe(result => {this.location = result});
      this.submitted = true;
  }

}
