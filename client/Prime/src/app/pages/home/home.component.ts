import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../Share-UI/navbar/navbar.component';
import { FooterComponent } from '../../Share-UI/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() artist: string = '';

  platforms = [
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/19/Spotify_logo_without_text.svg',
      name: 'Spotify',
      url: 'https://www.spotify.com/'
    },
    {
      imageUrl: 'https://i.pinimg.com/474x/df/74/c3/df74c38d4de71310a2a72ac5a420cb4a.jpg',
      name: 'Apple Music',
      url: 'https://music.apple.com/'
    },
    {
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg',
      name: 'YouTube',
      url: 'https://www.youtube.com/'
    },
    {
      imageUrl: 'https://i.pinimg.com/474x/05/ee/55/05ee55960ac7c0162c2f2ee988dc7783.jpg',
      name: 'Deezer',
      url: 'https://www.deezer.com/'
    },
  ];
}
