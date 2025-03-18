import { Component, Input } from '@angular/core';
import { NavbarComponent } from '../../Share-UI/navbar/navbar.component';
import { FooterComponent } from '../../Share-UI/footer/footer.component';
import { CommonModule } from '@angular/common';

interface Event {
  date: string;
  day: string;
  venue: string;
  location: string;
  type: 'concert' | 'club';
  image: string;
  priceRange?: string;
  soldOut?: boolean;
}

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

  events: Event[] = [
    {
      day: '20',
      date: 'Mar 2024',
      venue: 'District Nightclub',
      location: 'Atlanta, GA',
      type: 'club',
      image: 'https://i.pinimg.com/736x/21/e4/c5/21e4c51155be921de69e4c5bf5923474.jpg',
      priceRange: 'From $30'
    },
    {
      day: '27',
      date: 'Mar 2024',
      venue: 'LIV Nightclub',
      location: 'Miami Beach, FL',
      type: 'club',
      image: 'https://i.pinimg.com/736x/4c/20/02/4c20021bf0f2fe2abb3334efadb6090b.jpg',
      soldOut: true
    },
    {
      day: '28',
      date: 'Mar 2024',
      venue: 'Big Night Live',
      location: 'Boston, MA',
      type: 'concert',
      image: 'https://i.pinimg.com/736x/ab/78/26/ab782659bc06ae9eb4f14a95164e62a8.jpg',
      priceRange: 'From $45'
    }
 
  ];

  cards = [
    {
      imgSrc: 'https://picsum.photos/id/475/250/300',
      links: [
        { href: 'https://music.apple.com/', label: 'Apple Music' },
        { href: 'https://www.spotify.com/', label: 'Spotify' },
        { href: 'https://music.youtube.com/', label: 'YouTube Music' }
      ]
    },
    {
      imgSrc: 'https://picsum.photos/id/476/250/300',
      links: [
        { href: 'https://music.apple.com/', label: 'Apple Music' },
        { href: 'https://www.spotify.com/', label: 'Spotify' },
        { href: 'https://music.youtube.com/', label: 'YouTube Music' }
      ]
    }
  ];
}
