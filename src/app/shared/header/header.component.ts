import { Component, OnInit } from '@angular/core';
import { CommonService} from '../../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private commonService : CommonService
  ){

  }

  _commonServiceObject(){
    return this.commonService;
  }
  
  ngOnInit(){
  }
}
