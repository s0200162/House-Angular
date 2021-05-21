import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Room } from '../_models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private _http: HttpClient) { }

  getRoom(): Observable<Room[]> {
    return this._http.get<Room[]>(environment.apiUrl + 'room');
  }

  addRoom(room: Room): Observable<any> {
    return this._http.post(environment.apiUrl + 'room', room);
  }
}
