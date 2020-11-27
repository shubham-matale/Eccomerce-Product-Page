import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-nav-bar',
  templateUrl: './sub-nav-bar.component.html',
  styleUrls: ['./sub-nav-bar.component.css']
})
export class SubNavBarComponent implements OnInit {

  breadCrumItems = ['Home','Clothing','Mens Clothing','All Mens Clothing']
  constructor() { }

  ngOnInit(): void {
  }

}
