import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {Router } from '@angular/router';
import{EventService} from  '../../services/event.service';
import { Observable } from 'rxjs';
import { AngularFireStorage } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { AuthService } from '../../services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  exampleForm: FormGroup;
  currentUser : any ;
  validation_messages = {
    'activity': [
      {type: 'required',message:'topic is required'},
    ],
    'date' : [
      {type: 'required',message:'date is required'}
    ],
    'attendees': [
      {type: 'required',message:'description is required'}
    ],
    'details' : [
      {type: 'required',message:'venue is required'}
    ]
  }

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private router: Router,
    public eventService:EventService,
    private storage : AngularFireStorage,public authService : AuthService , public angularFireAuth : AngularFireAuth,private db: AngularFirestore 
  ) { }

  ngOnInit() {
    this.createTable();
    setTimeout(() => {
      this.getAdmin()
    }, 2000);
  }

  createTable() {
    this.exampleForm = this.fb.group({
      activity: ['',Validators.required],
    date: ['',Validators.required],
    attendees: ['',Validators.required],
    details: ['',Validators.required]
    })
  }

  resetField() {
    this.exampleForm = this.fb.group({
      activity: new FormControl('',Validators.required),
      date: new FormControl('',Validators.required),
      attendees: new FormControl('',Validators.required),
      details: new FormControl('',Validators.required)
    });

   
  }
  onSubmit(value: any) {
    this.eventService.createEvent(value)
    .then(
      res=>{
        this.resetField();
        this.router.navigate(['/events']);
      }
    )
  }


  getAdmin()
  {
    this.db.doc(`users/${this.angularFireAuth.auth.currentUser.uid}`).valueChanges().subscribe(item => {this.currentUser = item})
  }


}
