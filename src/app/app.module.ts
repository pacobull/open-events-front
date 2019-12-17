import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent,
    EventListComponent,
    EventDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
