import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpRequest } from  "@angular/common/http";
import {User} from '../user';
import { modelGroupProvider } from '@angular/forms/src/directives/ng_model_group';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  model = new User("amithc2", 'ohyeahwings', "Amith", "amith.chivukula@gmail.com", "", "");

  submitted = false;
  constructor(private http: HttpClient){

  }
  ngOnInit(): void {
    this.http.get('http://127.0.0.1:3000/users/1').subscribe(data => {
      console.log(data);
    });
  }

  onSubmit() { this.submitted = true;
    if(this.submitted){
      this.http.post('http://127.0.0.1:3000/users', this.model).subscribe(status=> console.log(JSON.stringify(status)));
    }
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}
