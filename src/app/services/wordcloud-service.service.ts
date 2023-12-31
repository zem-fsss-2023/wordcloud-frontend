import { Injectable, inject } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { GetImageParams } from '../types/get-image-params';

@Injectable({
  providedIn: 'root'
})
export class WordcloudServiceService {
  private http = inject(HttpClient);
  private WORDCLOUD_API_URL = `https://fsss-wordcloud.azurewebsites.net/api/wikiwords`;
  private WORDCLOUD_BASE_URL = `http://localhost:8080/api/wikiwords`;
  private API_BASE_URL = `http://localhost:8080/api/wiki`;

  constructor() { }

  async getImage(text: string): Promise<any>{
    let params = new HttpParams();
    params.append("title", text);
    console.log(params, text)
    const response: any = await firstValueFrom(this.http.get(this.WORDCLOUD_API_URL+"?title="+text, {responseType: 'text'}));
    return response;
  }

  async getImagewithParams(data: GetImageParams): Promise<any>{
    console.log("here!!")
    const response: any = await firstValueFrom(this.http.post(this.WORDCLOUD_API_URL, data, {responseType: 'text'}));
    return response;
  }
}
