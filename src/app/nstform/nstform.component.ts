import { Component, OnInit } from '@angular/core';

declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-nstform',
  templateUrl: './nstform.component.html',
  styleUrls: ['./nstform.component.css']
})
export class NSTformComponent implements OnInit {
  
  title = 'NG+JQ or NST';
  price="select * from"

  toolkit = {  
    Image: "assets/images/sys.png"  
  };

  constructor() { 
  }

  ngOnInit() {
  }

  toggleTitle(pager:number){
    $('.title').slideToggle();
  }
}
