import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { LocationDetailsComponent } from './location/location-details/location-details.component';
import { LocationDeleteComponent } from './location/location-delete/location-delete.component';
import { LocationUpdateComponent } from './location/location-update/location-update.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { LoginComponent} from './login/login.component'
import { AuthGuard} from './_helpers/auth-guard'
import { RoomCreateComponent } from './room/room-create/room-create.component';
import { RoomDetailsComponent } from './room/room-details/room-details.component';
import { RoomUpdateComponent } from './room/room-update/room-update.component';
import { RoomDeleteComponent } from './room/room-delete/room-delete.component';
import { ReservationDetailsComponent } from './reservation/reservation-details/reservation-details.component';
import { ReservationUpdateComponent } from './reservation/reservation-update/reservation-update.component';
import { ReservationDeleteComponent } from './reservation/reservation-delete/reservation-delete.component';
import { ReservationCreateComponent } from './reservation/reservation-create/reservation-create.component';


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'locations', component: LocationListComponent, canActivate: [AuthGuard]},
  { path: 'location/create', component: LocationCreateComponent},
  { path: 'location/update/:id', component: LocationUpdateComponent},
  { path: 'location/details/:id', component: LocationDetailsComponent},
  { path: 'location/delete/:id', component: LocationDeleteComponent},
  { path: 'rooms', component: RoomListComponent},
  { path: 'room/create', component: RoomCreateComponent},
  { path: 'room/details/:id', component: RoomDetailsComponent},
  { path: 'room/update/:id', component: RoomUpdateComponent},
  { path: 'room/delete/:id', component: RoomDeleteComponent},
  { path: 'reservations', component: ReservationListComponent},
  { path: 'reservation/create', component: ReservationCreateComponent},
  { path: 'reservation/details/:id', component: ReservationDetailsComponent},
  { path: 'reservation/update/:id', component: ReservationUpdateComponent},
  { path: 'reservation/delete/:id', component: ReservationDeleteComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
