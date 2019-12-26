import { Component, OnInit } from '@angular/core';
import  {ActivatedRoute} from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import {EventService} from '../../services/event.service';
import { Router } from '@angular/router';
import { Blog } from '../../shared/blog'
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs'

@Component({
  selector: 'app-admin-vdetails',
  templateUrl: './admin-vdetails.component.html',
  styleUrls: ['./admin-vdetails.component.css']
})
export class AdminVdetailsComponent implements OnInit {
  exampleForm: FormGroup;
  item: any;

  validation_messages = {
    'topic': [
      {type: 'required',message:'topic is required'},
    ],
    'date' : [
      {type: 'required',message:'date is required'}
    ],
    'description': [
      {type: 'required',message:'description is required'}
    ],
    'venue' : [
      {type: 'required',message:'venue is required'}
    ]
  }

  constructor(
    public eventService: EventService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public afs: AngularFirestore,public authService : AuthService, public angularFireAuth : AngularFireAuth
  ) { }


  currentUser : any

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.item = this.eventService.getSelectedItem(id).subscribe(data => this.item = data);
        this.createForm();


        setTimeout(() => {
          this.getAdmin()
         
        }, 2000);
          

  }

  createForm() {
    this.exampleForm = this.fb.group({
      topic: [this.item.topic, Validators.required],
      date: [this.item.date , Validators.required],
      description: [this.item.description, Validators.required],
      venue: [this.item.venue, Validators.required]
    })
  }

  onSubmit(value) {
    this.eventService.updateUser(this.item.id , value)
    .then(
      res => {
        this.router.navigate(['/events']);
      }
    )
  }

  delete() {
    const id = this.route.snapshot.params['id'];
    this.router.navigate(['/events'])
    this.eventService.deleteUser(id)
    .then(
      res => {
        this.router.navigate(['/events'])
        ;
      },
      err =>{
        console.log(err);
      }
    )
  }

  getAdmin()
  {
    this.afs.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})

  }

}
