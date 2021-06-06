import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

// API key stored in this file -- you need to create this file if you are viewing or cloning this project on GitHub.
import credentials from './api-config/api-credentials.json';

let yt_api = credentials.credentials.yt_api;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  // See this example: https://kheronn-machado.medium.com/youtube-angular-en-2ed98f07e0f9, but
  //    with this additional fix: https://stackoverflow.com/questions/67827624/how-do-i-read-a-local-json-file-in-angular-12

  constructor(public http: HttpClient) { }

  getVideosForChanel(channel: string, maxResults: number): Observable<Record<string, any>> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + yt_api + '&channelId=' + channel + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}