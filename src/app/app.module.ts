import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Modules
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { EventsModule } from './events/events.module';
import { LoginModule } from './login/login.module';
import { ProfileModule } from './profile/profile.module';

// State Management
import { StoreModule } from '@ngrx/store';
import { reducers } from './app.store';

// Components
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    ToolbarComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    EventsModule,
    LoginModule,
    ProfileModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
