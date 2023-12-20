import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  source: String = "/assets/shopping.jpeg"
  slogan:String = "Your one stop shop for everything.";

}
