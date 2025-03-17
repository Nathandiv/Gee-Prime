import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../../Share-UI/navbar/navbar.component";
import { FooterComponent } from "../../Share-UI/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() artist: string = '';

  platforms = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      name: 'Spotify'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Amazon_Music_logo.svg',
      name: 'Amazon Music'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
      name: 'YouTube'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Pandora_app_logo.svg',
      name: 'Pandora'
    }
  ];

}
