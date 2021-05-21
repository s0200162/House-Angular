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


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'locations', component: LocationListComponent, canActivate: [AuthGuard]},
  { path: 'location/create', component: LocationCreateComponent},
  { path: 'location/update/:locationID', component: LocationUpdateComponent},
  { path: 'location/details/:id', component: LocationDetailsComponent},
  { path: 'location/delete/:locationID', component: LocationDeleteComponent},
  { path: 'rooms', component: RoomListComponent},
  { path: 'room/create', component: RoomCreateComponent},
  { path: 'reservations', component: ReservationListComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
