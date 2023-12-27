import { Component } from '@angular/core';
import { UserService } from './Services/User.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent {
  title = 'USERDETAILSSERVICE';

  constructor(private userservice: UserService){
    
  }
}
