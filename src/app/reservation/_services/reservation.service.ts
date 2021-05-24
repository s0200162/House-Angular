import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reservation} from '../_models/reservation';
import { Observable} from 'rxjs';
import { environment} from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private _http: HttpClient) { }

  getReservation(): Observable<Reservation[]> {
    return this._http.get<Reservation[]>(environment.apiUrl + 'reservation');
  }

  getReservationById(reservationID): Observable<Reservation> {
    return this._http.get<Reservation>(environment.apiUrl + 'reservation/' + reservationID);
  }

  addReservation(reservation: Reservation): Observable<Reservation> {
    return this._http.post<Reservation>(environment.apiUrl + 'reservation', reservation);
  }

  updateReservation(reservationID, reservation: Reservation): Observable<Reservation>{
    return this._http.put<Reservation>(environment.apiUrl + 'reservation/' + reservationID, reservation);
  }

  deleteReservation(reservationID): Observable<Reservation>{
    return this._http.delete<Reservation>(environment.apiUrl + 'reservation/' + reservationID);
  }

}
