import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  constructor(private dataService: DataService) {}


  ngOnInit() {
    this.dataService.getRemoteData().subscribe(data => {
      console.log("local Data:");
      console.log(data);
    })
}


  }
