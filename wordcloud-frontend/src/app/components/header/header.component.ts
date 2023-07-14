import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "";
  fontScale: number = 50;
  case_UL: string = "upper";  // "upper";   // upper, lower or none
  minWordLength: number = 3;  // 3;
  rotation: number = 20;  // 20;

  @Output()
  titleChange = new EventEmitter<any>()
  onClick(){
    //the function that will send the text to api
    console.log(this.title);
    this.titleChange.emit({
      text:this.title,
      fontScale:this.fontScale,
      case_UL:this.case_UL,
      minWordLength:this.minWordLength,
      rotation:this.rotation
    });
  }
}
