import { Component} from '@angular/core';

import {User} from '../user'; 
@Component({
  selector: 'app-accountform',
  templateUrl: './accountform.component.html',
  styleUrls: ['./accountform.component.css']
})
export class AccountformComponent{

  model = new User("amithc2", 'ohyeahwings', "Amith", "amith.chivukula@gmail.com", "", "");

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

}