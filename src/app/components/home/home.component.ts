import { Component, OnInit } from "@angular/core";
import { ElementRef } from "@angular/core";
import $ from "jquery";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/scripts/AOS.js";
    this.elementRef.nativeElement.appendChild(s);

    $(window).scroll(function() {
      $(".button").css("opacity", 0 + $(window).scrollTop() / 1000);
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
  }
}
