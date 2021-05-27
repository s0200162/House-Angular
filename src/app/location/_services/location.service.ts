import { HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Location } from  '../_models/location'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocations(): Observable<Location[]> {
    return this.http.get<Location[]>(environment.apiUrl + 'location')
    .pipe(
      map((entries: any[]) =>
        entries.map((entry: any) =>
          new Location(entry.locationID, entry.name, entry.place, entry.adress, entry.nameAndPlace, entry.rooms))
      )
    );
  }

  getLocationById(locationID): Observable<Location> {
    return this.http.get<Location>(environment.apiUrl + 'location/' + locationID);
  }

  addLocation(location: Location): Observable<Location> {
    return this.http.post<Location>(environment.apiUrl + 'location', location);
  }

  updateLocation(locationId, location: Location): Observable<Location>{
    return this.http.put<Location>(environment.apiUrl + 'location/' + locationId, location)
  }

  deleteLocation(locationId): Observable<Location> {
    return this.http.delete<Location>(environment.apiUrl + 'location/' + locationId)
  }

}
