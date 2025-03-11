import { Component } from '@angular/core';
import { NavbarComponent } from "../../Share-UI/navbar/navbar.component";
import { FooterComponent } from "../../Share-UI/footer/footer.component";

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.css'
})
export class ShopComponent {

}
