import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { TourComponent } from './pages/tour/tour.component';
import { MusicComponent } from './pages/music/music.component';
import { LandingComponent } from './pages/landing/landing.component';

export const routes: Routes = [
  //   {
  //     path: '',
  //     redirectTo: 'landing',
  //     pathMatch: 'full',
  //   },
  {
    path: '',
    component: LandingComponent,
  },

  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
  },

  {
    path: 'music',
    component: MusicComponent,
  },

  {
    path: 'tour',
    component: TourComponent,
  },

  {
    path: 'shop',
    component: ShopComponent,
  },

  {
    path: 'contact',
    component: ContactComponent,
  },
];
