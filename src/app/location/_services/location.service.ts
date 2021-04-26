import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from  '../_models/location'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private _http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this._http.get<Location[]>(environment.apiUrl + 'location')
    .pipe(
      map((entries: any[]) =>
        entries.map((entry: any) =>
          new Location(entry.locationID, entry.name, entry.place, entry.adress, entry.nameAndPlace, entry.rooms))
      )
    );
  }

  addLocation(location: Location): Observable<any> {
    return this._http.post(environment.apiUrl + 'location', location);
  }
}
