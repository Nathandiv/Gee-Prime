import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Meta, Title } from '@angular/platform-browser';
import { initFlowbite } from 'flowbite';
import AOS from 'aos';

@Component({
selector: 'app-root',
standalone: true,
imports: [RouterOutlet],
templateUrl: './app.component.html',
styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
title = 'Prime';

constructor(private meta: Meta, private titleService: Title) {}

ngOnInit(): void {
// Set the page title
this.titleService.setTitle('Gee Prime | Beyond Genres. Just Music That Moves You');

// Add SEO meta tags
this.meta.addTags([
  {
    name: 'description',
    content:
      'Gee Prime is a genre-defying artist blending Soul, Gospel, Jazz, R&B, House, and Amapiano. Explore music, bio, and contact details. Found online as Gee, Geeprime, or Prime.'
  },
  {
    name: 'keywords',
    content:
      'Gee, Gee Prime, Geeprime, Prime, Spanish Piano, R&B artist, House music, Amapiano artist,Private School piano, South African music'
  },
  { name: 'author', content: 'Gee Prime' },
  { property: 'og:title', content: 'Gee Prime' },
  {
    property: 'og:description',
    content: 'R&B, House, Amapiano music artist. Find Gee Prime or Geeprime online.'
  },
  { property: 'og:url', content: 'https://www.geeprime.com' }
]);

// Flowbite initialization
initFlowbite();

// AOS animation settings
AOS.init({
  duration: 1000,
  once: true,
  mirror: false,
  easing: 'ease-in-out'
});
}
}