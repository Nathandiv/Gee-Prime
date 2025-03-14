import { Component, Input } from '@angular/core';
import { NavbarComponent } from "../../Share-UI/navbar/navbar.component";
import { FooterComponent } from "../../Share-UI/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @Input() imageUrl: string = '';
  @Input() title: string = '';
  @Input() artist: string = '';

}
