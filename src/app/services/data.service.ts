import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http:HttpClient) {}

  getRemoteData() {
    return this.http.get(
      "/assets/mensa.json"
      //https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot
    );
  }
}
