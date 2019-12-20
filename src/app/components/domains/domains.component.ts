import { Component, OnInit } from '@angular/core';
import $ from 'jquery';
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.css']
})
export class DomainsComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    $(function () {
      $('.material-card > .mc-btn-action').click(function () {
        var card = $(this).parent('.material-card');
        var icon = $(this).children('i');
        icon.addClass('fa-spin-fast');

        if (card.hasClass('mc-active')) {
          card.removeClass('mc-active');

          window.setTimeout(function () {
            icon
              .removeClass('fa-arrow-left')
              .removeClass('fa-spin-fast')
              .addClass('fa-bars');

          }, 800);
        } else {
          card.addClass('mc-active');

          window.setTimeout(function () {
            icon
              .removeClass('fa-bars')
              .removeClass('fa-spin-fast')
              .addClass('fa-arrow-left');

          }, 800);
        }
      });
    });

    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../../../assets/scripts/AOS.js";
    this.elementRef.nativeElement.appendChild(s);
  }
}


