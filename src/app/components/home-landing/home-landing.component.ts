import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {

  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document, private elementRef:ElementRef) { }

  ngOnInit() {
    var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "../../../assets/scripts/type.js";
  this.elementRef.nativeElement.appendChild(s);
  // var s2 = document.createElement("script");
  // s2.type = "text/javascript";
  // s2.src = "../../../assets/scripts/topology.js";
  // this.elementRef.nativeElement.appendChild(s2);
  }

}
