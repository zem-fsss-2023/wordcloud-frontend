import { Component, inject } from '@angular/core';
import { WordcloudServiceService } from './services/wordcloud-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wordcloud-frontend';
  service = inject(WordcloudServiceService);
  imageData: any = null;
  onTitleChange(title: string){
    console.log(title);
    this.service.getImage(title).then(data => {console.log(data); this.imageData = data})
  }
}
