import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
    The Website uses cookies to provide beter user experience.
  <div class="close"><button class="btn"(click)="closeNotification()">X</button></div>
    </div>`,
  styles: ["div{margin: 10px 0px; padding: 10px 20px; background-color: #FAD7A0; text-align:center;}","P{font-size:14px;}",".close{float:right;margin-top:-18px;}"]
})
export class NotificationComponent {

  displayNotification:boolean=false;
  closeNotification(){
    this.displayNotification = true;
  }

}
