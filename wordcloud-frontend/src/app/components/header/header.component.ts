import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "";
  fontScale: number = 50;;
  @Output()
  titleChange = new EventEmitter<any>()
  onClick(){
    //the function that will send the text to api
    console.log(this.title);
    this.titleChange.emit({text:this.title, fontScale:this.fontScale});
  }
}
