import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationService } from '../_services/location.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {
  locationID = 0;
  location;

  constructor(
    private _locationService: LocationService,
    private _activatedRoute: ActivatedRoute
   ) {  }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe(data => {
      this.locationID = data.id;
      console.log(data)
    });

    this._locationService.getLocationById(this.locationID).subscribe(results => 
      {this.location = results;
        console.log(results)
      });
  }

}
