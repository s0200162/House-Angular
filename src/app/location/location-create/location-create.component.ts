import { Component, OnInit } from '@angular/core';
import { LocationService } from '../_services/location.service';
import { Location } from '../_models/location'
import { Router } from '@angular/router'
import { LocationListComponent } from '../location-list/location-list.component';

@Component({
  selector: 'app-location-create',
  templateUrl: './location-create.component.html',
  styleUrls: ['./location-create.component.css']
})
export class LocationCreateComponent implements OnInit {
  public location: Location = new Location();
  public submitted: boolean = false;
  public postResponse: any;

  constructor(
    private _locationService: LocationService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.location.locationID = 0;
    this._locationService.addLocation(this.location)
      .subscribe(result => {this.postResponse = result});
      this.submitted = true;
      this.router.navigate(['locations'])
  }

}
