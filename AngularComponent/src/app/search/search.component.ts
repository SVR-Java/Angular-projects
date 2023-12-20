import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  serachValue:String = "";

  changeSearchValue(eventData:Event){
    this.serachValue = (<HTMLInputElement>eventData.target).value;
    //console.log((<HTMLInputElement>eventData.target).value)

  }
}
