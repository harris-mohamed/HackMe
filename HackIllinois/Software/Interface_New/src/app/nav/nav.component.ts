import { Component, OnInit } from '@angular/core';
import { projection } from '@angular/core/src/render3';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  appTitle: string = 'HackMe';

  constructor() { }

  ngOnInit() {
  }
}
