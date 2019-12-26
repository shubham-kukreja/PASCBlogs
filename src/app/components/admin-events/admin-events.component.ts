import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router } from '@angular/router';
import{EventService} from  '../../services/event.service';
import { Blog } from '../../shared/blog'
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs'

@Component({
  selector: 'app-admin-events',
  templateUrl: './admin-events.component.html',
  styleUrls: ['./admin-events.component.css']
})
export class AdminEventsComponent implements OnInit {
  exampleForm: FormGroup;
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
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public eventService:EventService,
    public afs: AngularFirestore,public authService : AuthService, public angularFireAuth : AngularFireAuth
  ) { }
  currentUser : any
  ngOnInit() {
    this.createForm();

    setTimeout(() => {
      this.getAdmin()
    
    }, 2000);

  }

  createForm() {
    this.exampleForm = this.fb.group({
    topic: ['',Validators.required],
    date: ['',Validators.required],
    description: ['',Validators.required],
    venue: ['',Validators.required]
    });
  }

  resetField() {
    this.exampleForm = this.fb.group({
      topic:new FormControl('',Validators.required),
      date:new FormControl('',Validators.required),
      description:new FormControl('',Validators.required),
      venue:new FormControl('',Validators.required)
    });

   
  }
  onSubmit(value: any) {
    this.eventService.createUser(value)
    .then(
      res=>{
        this.resetField();
        this.router.navigate(['/adminEvents']);
      }
    )
  }


  getAdmin()
  {
    this.afs.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})

  }


}
