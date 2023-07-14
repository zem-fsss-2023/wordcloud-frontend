import { Pipe, Sanitizer } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'safe'})
export class SafeHtml {
  constructor(private sanitizer:DomSanitizer){}

  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
