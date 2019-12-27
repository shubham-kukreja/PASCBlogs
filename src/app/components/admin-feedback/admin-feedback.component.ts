import { Component, OnInit } from '@angular/core';
import { BlogService } from '../../services/blog.service';

import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs'

@Component({
  selector: 'app-admin-feedback',
  templateUrl: './admin-feedback.component.html',
  styleUrls: ['./admin-feedback.component.css']
})
export class AdminFeedbackComponent implements OnInit {

  feedback:Array<any>
  currentUser:any;

  constructor(private blogService : BlogService ,  public angularFireAuth : AngularFireAuth , public afs: AngularFirestore) { }

  ngOnInit() {
    this.blogService.getFeedback().subscribe(item => {this.feedback = item})

    setTimeout(() => {
      this.getAdmin()
     
    }, 2000);

  }

  getAdmin()
  {
    this.afs.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})

  }

}
