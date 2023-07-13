import { Component, inject } from '@angular/core';
import { WordcloudServiceService } from './services/wordcloud-service.service';
import { GetImageParams } from './types/get-image-params';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wordcloud-frontend';
  service = inject(WordcloudServiceService);
  imageData: any = null;
  onTitleChange(data: GetImageParams){
    this.service.getImagewithParams(data).then(data => {console.log(data); this.imageData = data})
  }
}
