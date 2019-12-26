import { Component, OnInit } from "@angular/core";
import { ElementRef } from "@angular/core";

import {EventService } from '../../services/event.service';
import {Params, Router,ActivatedRoute} from '@angular/router';
import $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  
  items: any = [];
  
  constructor(private elementRef: ElementRef ,  public eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) {}

  ngOnInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/scripts/AOS.js";
    this.elementRef.nativeElement.appendChild(s);

    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "../../../assets/scripts/slideshow.js";
    this.elementRef.nativeElement.appendChild(s1);


    $(window).scroll(function() {
      $(".button").css("opacity", 0 + $(window).scrollTop() / 500);
    });
    $(window).scroll(function() {
      $(".home-footer").css("opacity", 1 - $(window).scrollTop() / 300);
    });
    $(document).ready(function() {
      $("#box1").click(function() {
        $("#e0,#e2,#e3,#e4").css({ display: "none" });
        $("#e1, #close").fadeIn(2000);
      });
      $("#box2").click(function() {
        $("#e0,#e1,#e3,#e4").css({ display: "none" });
        $("#e2, #close").fadeIn(2000);
      });
      $("#box3").click(function() {
        $("#e0,#e1,#e2,#e4").css({ display: "none" });
        $("#e3, #close").fadeIn(2000);
      });
      $("#box4").click(function() {
        $("#e0,#e1,#e2,#e3").css({ display: "none" });
        $("#e4, #close").fadeIn(2000);
      });
      $("#close").click(function() {
        $("#e1,#e2,#e3,#e4,#close").css({ display: "none" });
        $("#e0").fadeIn(2000);
      });
    });
    
    this.getData() ;

  }

  getData() {
    this.eventService.getUsers()
    .subscribe(result => {
      console.log(result);
      result.forEach((item) => {
        console.log(item);
        this.items.push(item);
      }) 
      
    
    })
  }


}
