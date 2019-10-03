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
    this.offers = this.httpClient.get('http://e-digital-telco-mule-app.uk-e1.cloudhub.io/api/promotionmanagement/promotion');
    this.offers 
    .subscribe(data => {
      console.log('my data: ', data[0]);
    })
  }
}