import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {


   

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 50){
          $('.fixed-top').css({'box-shadow' : 'none'});
      } else{
          $('.fixed-top').css({'box-shadow' : '0px 1px 10px #999'});
      }
  });



  }

}
