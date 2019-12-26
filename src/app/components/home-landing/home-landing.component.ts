import { Component, OnInit } from '@angular/core';
import { Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {ElementRef} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-landing',
  templateUrl: './home-landing.component.html',
  styleUrls: ['./home-landing.component.css']
})
export class HomeLandingComponent implements OnInit {


  User;
  currentUser : any
  item: any;


  constructor(private _renderer2: Renderer2, 
    @Inject(DOCUMENT) private _document: Document, private elementRef:ElementRef ,public router : Router, public authService : AuthService, public angularFireAuth : AngularFireAuth, public afs: AngularFirestore) { }

  ngOnInit() {
    var s = document.createElement("script");
  s.type = "text/javascript";
  s.src = "../../../assets/scripts/type.js";
  this.elementRef.nativeElement.appendChild(s);


  this.User = this.authService.afAuth.user;
 

  }


  



}
