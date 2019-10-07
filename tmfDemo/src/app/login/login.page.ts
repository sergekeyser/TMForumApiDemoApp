import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
	name:string;
	password: string;
	warningtext: string;

  constructor(public menuCtrl: MenuController,public httpClient: HttpClient, private router: Router) {
	  }
	   public customerdata: Observable<any>;	
	   
	  login(){
		console.log("logging in");  
		console.log(this.name);
		console.log(this.password);
		const options = {
			headers: {
					'Authorization': '01234567BBC'
				}
		}
		
		this.customerdata = this.httpClient.get('http://e-digital-telco-mule-app.uk-e1.cloudhub.io/api/federated/userinfo',options);
		this.customerdata 
		.subscribe(data => {
		   if (data.given_name == this.name) {
			  var navigationExtras = {
				  queryParams: {
					jsondata: JSON.stringify(data)
				  }
				}
			this.router.navigate(['/home'],navigationExtras);
		   }			
			else
			{	
				this.warningtext="User name or password not correct, please try again"
				console.log('error!')	
			}
		  })
	  }
		
ionClearErrorMessage()
{
	this.warningtext=""
}
ionViewWillEnter() {
          this.menuCtrl.enable(false);
       }
       ionViewDidLeave() {
          this.menuCtrl.enable(true);
       }

  ngOnInit() {
  }

}
