import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

  ngOnInit(): void {
    initFlowbite();
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false,
      easing: 'ease-in-out',
    });
  }
}
