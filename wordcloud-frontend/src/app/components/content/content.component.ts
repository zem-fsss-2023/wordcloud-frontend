import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnChanges{
  @Input()
  imageData: any;

  ngOnChanges(){
    console.log(this.imageData);
  }
}
