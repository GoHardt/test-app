import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(public http:HttpClient) {}

  getRemoteData() {
    return this.http.get(
      "https://digiboard.htwk-leipzig.de/digiboard/getmensatoday.php"
      //https://www.reddit.com/r/gifs/top/.json?limit=10&sort=hot
    );
  }
}
