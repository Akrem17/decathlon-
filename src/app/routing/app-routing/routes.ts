import { Routes } from '@angular/router';
import { InscritComponent } from 'src/app/inscrit/inscrit.component';
import { AcceuilComponent } from 'src/app/acceuil/acceuil.component';
import { SigninComponent } from 'src/app/signin/signin.component';
import { EventsComponent } from 'src/app/events/events.component';
import { EventdComponent } from 'src/app/eventd/eventd.component';
import { CoachComponent } from 'src/app/coach/coach.component';
import { NuComponent } from 'src/app/nu/nu.component';


export const routes: Routes = [
  { path: 'home',  component: AcceuilComponent },
  { path: 'signup',  component: InscritComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'events',  component: EventsComponent },
  { path: 'events/:id',     component: EventdComponent },
  { path: 'coach',  component: CoachComponent },
  { path: 'nuts',  component: NuComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];