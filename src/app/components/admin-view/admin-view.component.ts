import { Component, OnInit } from '@angular/core';
import {EventService } from '../../services/event.service';
import {Params, Router,ActivatedRoute} from '@angular/router';
import { Blog } from '../../shared/blog'
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs'

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  items: Array<any>

  constructor(
    public eventService: EventService,
    private router: Router,
    private route: ActivatedRoute,
    public afs: AngularFirestore,public authService : AuthService, public angularFireAuth : AngularFireAuth
  ) { }
currentUser:any;

  ngOnInit() {
    this.getData();

    setTimeout(() => {
      this.getAdmin()
     
    }, 2000);
  }

  getData() {
    this.eventService.getUsers()
    .subscribe(result => {
      this.items = result;
    })
  }
  viewDetails(item) {
    this.router.navigate(['/adminDetails/' + item.id]);
  }


  getAdmin()
  {
    this.afs.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})

  }


}
