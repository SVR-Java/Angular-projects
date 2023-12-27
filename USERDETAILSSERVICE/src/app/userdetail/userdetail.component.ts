import { Component } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrl: './userdetail.component.css'
})
export class UserdetailComponent {

  constructor(private userService: UserService) { }

  user: { name: string; job: string; gender: string; country: string; age: number; avatar: string; } | undefined;

  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
      this.user = data;
    })
  }
}
