import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  selectedSortOption = {
    key:'priceLowToHigh',
    value:'Price Low To High' 
  }
  sortOptions=[
    {
      key:'priceLowToHigh',
      value:'Price Low To High' 
    },
    {
      key:'priceHighToLow',
      value:'Price High To Low' 
    },
    {
      key:'ratings',
      value:'Ratings' 
    }
]
  constructor() { }

  ngOnInit(): void {
  }

  sortBy(item){
    this.selectedSortOption= item;
    
  }
  

}
