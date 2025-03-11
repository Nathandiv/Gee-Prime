import { Component } from '@angular/core';
import { NavbarComponent } from "../../Share-UI/navbar/navbar.component";
import { FooterComponent } from "../../Share-UI/footer/footer.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
