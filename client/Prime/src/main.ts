import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import Aos from 'aos';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

  Aos.init({
  duration: 1000,
  once: true,
  easing: 'ease-in-out'
});
