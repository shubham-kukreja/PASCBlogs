import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DOCUMENT } from '@angular/common';
import {ElementRef} from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  authError : any;
 

  constructor(public authService : AuthService, private elementRef:ElementRef)  { }

  ngOnInit() {
    this.authService.eventAuthError$.subscribe( data => {
      this.authError = data;
    });
  }
  login(frm) {
    this.authService.adminlogin(frm.value.email, frm.value.password);
  }

}
