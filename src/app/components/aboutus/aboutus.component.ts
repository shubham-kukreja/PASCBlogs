import { Component, OnInit } from '@angular/core';
import {ElementRef} from '@angular/core';
import { BlogService } from '../../services/blog.service'
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

export interface FormModel {
  captcha?: string;
}


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  name : string;
  email : string;
  subject: string;
  text : string;

  public formModel: FormModel = {};

  constructor(private blogService : BlogService, private storage : AngularFireStorage,public authService : AuthService , public router : Router , private elementRef:ElementRef) { }



  ngOnInit() {
    var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "../../../assets/scripts/AOS.js";
  this.elementRef.nativeElement.appendChild(s);
  }

  createFeed()
  {
    const data = {
      name : this.name,
      email : this.email,
      subject : this.subject,
      text : this.text
    };

    this.blogService.createfeed(data)
    setTimeout(() => {
      window.alert("Feedback Received")
      window.location.href="/aboutus"
    }, 1000);
  }



}
