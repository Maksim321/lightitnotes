import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { ApiService } from './api.service'

@Injectable()
export class AuthService {

  authState: firebase.User = null;

  constructor(public afAuth: AngularFireAuth) {
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get getUserUID(): string {
    return this.authState.uid;
  }

  get currentUserObservable(){
    return this.afAuth.authState
  }

  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  register(value){
    return firebase.auth().createUserWithEmailAndPassword(value.email, value.password);
  }

  signIn(value){
    return firebase.auth().signInWithEmailAndPassword(value.email, value.password);
  } 

  googleLogin() {
    return this.socialSignIn(new firebase.auth.GoogleAuthProvider());
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider);
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }   
}