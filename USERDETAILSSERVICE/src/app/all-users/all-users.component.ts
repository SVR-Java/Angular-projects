import { NumberSymbol } from '@angular/common';
import { Component } from '@angular/core';
import { UserService } from '../Services/User.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrl: './all-users.component.css'
})
export class AllUsersComponent {
  

  users:{name: string, job: string, gender: string, country: string, age: NumberSymbol, avatar: string} [] =[];
  constructor(private userService:UserService){
    this.users = userService.users;
  }
  ShowDetails(user:{name: string, job: string, gender: string, country: string, age: NumberSymbol, avatar: string}){
    this.userService.ShowUserDetails(user);
  }
  user: { name: string; job: string; gender: string; country: string; age: number; avatar: string; } | undefined;
  
  ngOnInit(): void {
    this.userService.OnShowDetailsClicked.subscribe((data: {name: string, job: string, gender: string, country: string, age: number, avatar: string}) => {
      this.user = data;
    })
  }
}
