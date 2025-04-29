import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [LoaderComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {

  isLoading = true;
  isClicked = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000); // loader disappears after 1 second
  }

  goToHome(): void {
    this.router.navigate(['/home']);
  }

  handleClick(): void {
    this.isClicked = true;
    setTimeout(() => {
      this.isClicked = false;
    }, 300); // match the bounce animation duration
  }
}
