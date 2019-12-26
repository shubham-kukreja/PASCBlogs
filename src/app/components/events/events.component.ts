import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ElementRef} from '@angular/core';
import {EventService } from '../../services/event.service';
import {Params, Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  items: Array <any>

  constructor(private elementRef:ElementRef,
    public eventService: EventService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "../../../assets/scripts/AOS.js";
  this.elementRef.nativeElement.appendChild(s);

  this.getData();
  }

  getData() {
    this.eventService.getEvents()
    .subscribe(result => {
      this.items = result;
    })
  }

}
