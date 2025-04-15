import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  constructor(private router: Router) {}

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  isClicked = false;

  handleClick(): void {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 300); // match the bounce animation duration
  }

}
