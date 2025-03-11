import { Component } from '@angular/core';
import { NavbarComponent } from "../../Share-UI/navbar/navbar.component";
import { FooterComponent } from "../../Share-UI/footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
