import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import 'hammerjs';
import { AppComponent } from './app.component';
import { InscritComponent } from './inscrit/inscrit.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AppRoutingModule } from './routing/app-routing/app-routing.module';
import { SigninComponent } from './signin/signin.component';
import { EventsComponent } from './events/events.component';
import {EventsService  } from '../app/services/events.service';
import { EventdComponent } from './eventd/eventd.component';
import { CoachComponent } from './coach/coach.component';
import { NuComponent } from './nu/nu.component';
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    InscritComponent,
    AcceuilComponent,
    SigninComponent,
    EventsComponent,
    EventdComponent,
    CoachComponent,
    NuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
