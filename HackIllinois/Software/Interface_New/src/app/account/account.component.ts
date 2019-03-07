import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  //h1Style: boolean = false;

  constructor(/*private data: DataService*/) { }

  ngOnInit() {
  }

  // firstClick() {
  //   this.data.firstClick();
  //   this.h1Style = !this.h1Style;
  // }

}
