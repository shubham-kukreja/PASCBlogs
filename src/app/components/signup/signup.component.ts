import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';


export interface FormModel {
  captcha?: string;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public formModel: FormModel = {};
  
  constructor(public authService : AuthService) { }
  authError: any;

  ngOnInit() {
    this.authService.eventAuthError$.subscribe( data => {
      this.authError = data;
    })
  }
  createUser(frm) {
    this.authService.createUser(frm.value);
  }
}
