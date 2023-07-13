import { Injectable, inject } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordcloudServiceService {
  private http = inject(HttpClient);
  private WORDCLOUD_BASE_URL = `http://localhost:8080/api/wikiwords`;
  private API_BASE_URL = `http://localhost:8080/api/wiki`;

  constructor() { }

  async getImage(text: string): Promise<any>{
    let params = new HttpParams();
    params.append("title", text);
    console.log(params, text)
    const response: any = await firstValueFrom(this.http.get(this.WORDCLOUD_BASE_URL+"?title="+text, {responseType: 'text'}));
    return response;
  }

  async getImagewithParams(data: {"text": string, "fontScale": number}): Promise<any>{
    const response: any = await firstValueFrom(this.http.post(this.WORDCLOUD_BASE_URL, data, {responseType: 'text'}));
    return response;
  }
}
