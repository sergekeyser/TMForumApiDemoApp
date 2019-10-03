import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  offers: Observable<any>;	
  customerdata: any;
  
  firstname: any;
  lastname: any;
  phone: any;
  
   constructor(private route: ActivatedRoute, public httpClient: HttpClient) { 
	this.route.queryParams.subscribe(params => {
      console.log(JSON.stringify(params))
	  if (params && params.jsondata) {
        this.customerdata = JSON.parse(params.jsondata);
		this.firstname= this.customerdata.given_name
		this.lastname= this.customerdata.family_name
		this.phone= this.customerdata.phone_number
      }
    });
   
   
   
    this.offers = this.httpClient.get('http://e-digital-telco-mule-app.uk-e1.cloudhub.io/api/promotionmanagement/promotion');
    this.offers 
    .subscribe(data => {
      console.log('my data: ', data[0]);
    })
  }
}