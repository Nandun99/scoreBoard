import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeamsComponent } from './teams/teams.component';
import { TossComponent } from './toss/toss.component';
import { SelectPlayerComponent } from './select-player/select-player.component';
import { MaterialExampleModule } from 'src/environments/meterial.module';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TossComponent,
    SelectPlayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
