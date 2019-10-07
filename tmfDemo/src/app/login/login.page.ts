import { Component, OnInit } from '@angular/core';
import {  MenuController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import OktaAuth from '@okta/okta-auth-js';
import { HttpModule } from '@angular/http';


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
					//'Authorization': 'Bearer eyJraWQiOiJHMVNLWGhrNV9KVWNfZUVfYWt3VXFDT3FIblltby04MGxPZ3FocWR2TWFrIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnJ6VjBaeENMTXJrRF80c01tUjkyMTBuMmtIRllHbGFIWEJEbG9pOUhKR3ciLCJpc3MiOiJodHRwczovL2Rldi02MDIxNDIub2t0YS5jb20vb2F1dGgyL2RlZmF1bHQiLCJhdWQiOiJhcGk6Ly9kZWZhdWx0IiwiaWF0IjoxNTcwNDU3NjM0LCJleHAiOjE1NzA0NjEyMzQsImNpZCI6IjBvYTFpOTN5cWtvYnN0azNoMzU3IiwidWlkIjoiMDB1MWk5MG00MXJLODlkM3QzNTciLCJzY3AiOlsib3BlbmlkIl0sInN1YiI6ImpvaG55bWFuQG1haWxpbmF0b3IuY29tIn0.h6heTca4lIQ7_RQ1jEh7fw1e5Up-kP8m8AJ7ch0L4jBJdnPtLAacsgzITB1ZCk4YZ_jelXqzjx53D1srEqz-AmU01zZkW5zrp1_YD8vEeVWYk0DC-bFruA-AvkuMHzcw-34gNxutwtiZFcUfRJAbR3w-KYpyiRec9_RRceaiL91h699oJXPQKMTlzJYCGN0cKrEyui1_RxzrolPAZUYS9Ra6hm-HFxPkAQqi5uIBfzp6PFfdBSk37cHx0isqWx8WVz8_Lb2dL73xRHo5997jglWmhF3yx5mgb-XdWguhqdA56ZJhb9TJ909BXP3EKsFh2BLkiwYLbfpM26YiyafZCQ'
					'Authorization': this.name
					
			}
		}
		
		this.customerdata = this.httpClient.get('http://e-digital-telco-mule-app.uk-e1.cloudhub.io/api/federated/userinfo',options);
		this.customerdata 
		.subscribe(data => {
		   if (data.email == this.name) {
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
