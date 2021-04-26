import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocationCreateComponent } from './location/location-create/location-create.component';
import { LocationListComponent } from './location/location-list/location-list.component';
import { RoomListComponent } from './room/room-list/room-list.component';
import { ReservationListComponent } from './reservation/reservation-list/reservation-list.component';
import { LoginComponent} from './login/login.component'
import { AuthGuard} from './_helpers/auth-guard'


const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'login', component: LoginComponent },
  { path: 'locations', component: LocationListComponent, canActivate: [AuthGuard]},
  { path: 'location/create', component: LocationCreateComponent},
  { path: 'rooms', component: RoomListComponent},
  { path: 'reservations', component: ReservationListComponent},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
