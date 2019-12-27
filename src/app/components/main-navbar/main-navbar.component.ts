import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Blog } from 'src/app/shared/blog';
import { Observable } from 'rxjs'
import $ from 'jquery';

@Component({
  selector: 'app-main-navbar',
  templateUrl: './main-navbar.component.html',
  styleUrls: ['./main-navbar.component.css']
})
export class MainNavbarComponent implements OnInit {

  User;
  currentUser : any
  item: any;
  constructor(public authService : AuthService, public angularFireAuth : AngularFireAuth, public afs: AngularFirestore) { }

  ngOnInit() {

    this.User = this.authService.afAuth.user;
  this.authService.afAuth.auth.onAuthStateChanged(user => {
    if(user)
    {
      this.getCurrent()
    }
  })
   

    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if(scroll < 50){
          $('.fixed-top').css({'box-shadow' : 'none'});
      } else{
          $('.fixed-top').css({'box-shadow' : '0px 1px 10px #999'});
      }
  });

  }

  getCurrent() {
    this.afs.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})
  }

}
