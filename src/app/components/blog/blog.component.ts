import { Component, OnInit, Input } from '@angular/core';
import { Blog } from 'src/app/shared/blog';
import { ElementRef } from "@angular/core";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  @Input()
  blog: Blog;
  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    var s1 = document.createElement("script");
  s1.type = "text/javascript";
  s1.src = "../../../assets/scripts/AOS.js";
  this.elementRef.nativeElement.appendChild(s1);
  }

}
