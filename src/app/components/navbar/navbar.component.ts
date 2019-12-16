import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import * as firebase from "firebase/app";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Blog } from 'src/app/shared/blog';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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
  }
  getCurrent() {
    this.afs.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})
  }
}
