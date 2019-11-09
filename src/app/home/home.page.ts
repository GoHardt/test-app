import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{

  public MensaDetails:Array<any>;

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.dataService.getRemoteData().subscribe((data) => {
      var anyData:Array<any> = <any>data.Eintrag;
      this.MensaDetails = anyData;
      console.log(this.MensaDetails);
    })
  }


  }
