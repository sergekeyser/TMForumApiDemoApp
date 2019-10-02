import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  offers: Observable<any>;	
   constructor(public httpClient: HttpClient) { 
    this.offers = this.httpClient.get('https://anypoint.mulesoft.com/mocking/api/v1/links/9295214c-f1b8-4538-8fe8-4d23432cb940/tmf-api/promotionManagement/v2/promotion');
    this.offers 
    .subscribe(data => {
      console.log('my data: ', data[0]);
    })
  }
}