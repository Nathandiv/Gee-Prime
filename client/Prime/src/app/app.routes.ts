import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ShopComponent } from './pages/shop/shop.component';
import { TourComponent } from './pages/tour/tour.component';
import { MusicComponent } from './pages/music/music.component';

export const routes: Routes = [

    {
        path:'',component:HomeComponent
    },

    {
        path:'about',component:AboutComponent
    },

    {
        path:'music',component:MusicComponent
    },

    {
        path:'tour',component:TourComponent
    },


    {
        path:'shop',component:ShopComponent
    },

    {
        path:'contact',component:ContactComponent
    },


];
