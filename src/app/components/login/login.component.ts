import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DOCUMENT } from '@angular/common';
import {ElementRef} from '@angular/core';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  authError : any;
  clicked = false;
 
  constructor(public authService : AuthService, private elementRef:ElementRef)  { }

  ngOnInit() {
    
    this.authService.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
    // this.clicked=false;
    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "../../../assets/scripts/login.js";
    // this.elementRef.nativeElement.appendChild(s);
  }
  
  login(frm) {
    this.authService.login(frm.value.email, frm.value.password);
  }
}
