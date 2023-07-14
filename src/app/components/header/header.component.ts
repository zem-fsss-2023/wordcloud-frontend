import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  title: string = "";
  fontScale: number = 50;
  case: string = "upper";  // "upper";   // upper, lower or none
  minWordLength: number = 3;  // 3;
  rotation: number = 20;  // 20;
  fontFamily: string = "sans serif";
  loadGoogleFonts: string = "";

  @Output()
  titleChange = new EventEmitter<any>()
  onClick(){
    //the function that will send the text to api
    console.log(this.title);
    this.titleChange.emit({
      text:this.title,
      fontScale:this.fontScale,
      case:this.case,
      minWordLength:this.minWordLength,
      rotation:this.rotation,
      fontFamily:this.fontFamily,
      loadGoogleFonts:this.fontFamily
    });
  }
}
