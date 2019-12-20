import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent } from './landing-page/landing-page.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { LoginComponent } from './login/login/login.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

const routes: Routes = [
  { path: 'home', component: LandingPageComponent },
  { path: 'events', component: EventListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'eventDetails/:id', component: EventDetailsComponent },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [PageNotFoundComponent]
})
export class AppRoutingModule {}
