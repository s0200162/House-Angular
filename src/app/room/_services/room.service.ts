import { LOCATION_INITIALIZED } from '@angular/common';
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

  getRoomByLocation(locationID): Observable<Room[]> {
    return this._http.get<Room[]>(environment.apiUrl + 'values/' + locationID);
  }

  getRoomById(roomID): Observable<Room> {
    return this._http.get<Room>(environment.apiUrl + 'room/' + roomID);
  }

  addRoom(room: Room): Observable<Room> {
    return this._http.post<Room>(environment.apiUrl + 'room', room);
  }

  updateRoom(roomId, room: Room): Observable<Room>{
    return this._http.put<Room>(environment.apiUrl + 'room/' + roomId, room)
  }

  deleteRoom(roomId): Observable<Room> {
    return this._http.delete<Room>(environment.apiUrl + 'room/' + roomId)
  }
}
