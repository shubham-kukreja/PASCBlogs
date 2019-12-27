
import { Injectable, NgZone } from '@angular/core';
import { User } from "../services/user";
import { auth } from 'firebase/app';
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Router } from "@angular/router";
import { BehaviorSubject } from 'rxjs'
import * as firebase from 'firebase/app';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  userData: any; // Save logged in user data
  itemdoc: AngularFirestoreDocument; 
  authState : any = null;
  private eventAuthError = new BehaviorSubject<string>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
log:any;
User;
  constructor(
    public afs: AngularFirestore,   // Inject Firestore service
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,  
    public ngZone: NgZone // NgZone service to remove outside scope warning
  ) {    
    /* Saving user data in localstorage when 
    logged in and setting up null when logged out */
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userData = user;
        localStorage.setItem('user', JSON.stringify(this.userData));
        JSON.parse(localStorage.getItem('user'));
      } else {
        localStorage.setItem('user', null);
        JSON.parse(localStorage.getItem('user'));
      }
    })
    this.afAuth.authState.subscribe(data => this.authState = data)
  }
  GoogleAuth() {
    return this.AuthLogin(new auth.GoogleAuthProvider());
  }
  
  // Auth logic to run auth providers
  async AuthLogin(provider) {
    try {
      const result = await this.afAuth.auth.signInWithPopup(provider);
      this.ngZone.run(() => {
        this.router.navigate(['blogs']);
      });
      this.SetUserData(result.user);
    }
    catch (error) {
      window.alert(error);
    }
  }
  
  /* Setting up user data when sign in with username/password, 
  sign up with username/password and sign in with social auth  
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(`users/${user.uid}`);
    const userData: User = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    }
    return userRef.set(userData, {
      merge: true
    })
  }
  
  // Sign out 
  async SignOut() {
    await this.afAuth.auth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return (user !== null) ? true : false;
  }
  // Testing
  login(email: string, password: string) {
    this.log=true;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(async error => {
        this.eventAuthError.next(error);
        window.alert(error);
        this.log=false;
      })
      .then(async userCredential => {
        if (userCredential && userCredential.user.emailVerified) {
          this.router.navigate(['/blogs']);
        }
        else {
          if( this.log){
            window.alert("Verify Email");
            this.logout().then(() => this.router.navigate(['/login']) );
          }
          
 
        }
      })
  }


  adminlogin(email: string, password: string) {
    this.log=true;
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .catch(async error => {
        this.eventAuthError.next(error);
        window.alert(error);
        this.log=false;
      })
      .then(async userCredential => {
        if (userCredential && userCredential.user.emailVerified ) {
          this.router.navigate(['/adminPanel']);
        }

        else {
          if( this.log){
            window.alert("Verify Email");
            this.logout().then(() => this.router.navigate(['/home']) );
          }
          
        }
      })
  }




  getUserState() {
    return this.afAuth.authState;
  }
  
  createUser(user) {
    this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)

      .then(async userCredential => {
        this.newUser = user;
        await this.afAuth.auth.currentUser.sendEmailVerification();
        userCredential.user.updateProfile({
          displayName: user.firstName + ' ' + user.lastName
        });
        this.logout().then(() => this.router.navigate(['/verify']) );
        this.insertUserData(userCredential)
      })
      .catch(error => {
        this.eventAuthError.next(error);
        window.alert(error);
      });
  }
  async ForgotPassword(passwordResetEmail) {
    try {
      await this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail);
      window.alert('Password reset email sent, check your inbox.');
    }
    catch (error) {
      window.alert(error);
    }
  }
  insertUserData(userCredential: firebase.auth.UserCredential) {
    return this.afs.doc(`users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      displayName : this.newUser.firstName + ' ' + this.newUser.lastName,
      admin : false
    })
  }

  logout() {
    return this.afAuth.auth.signOut();
  }

  adminlogout() {
    this.logout().then(() => this.router.navigate(['/home']) );
  }

}
