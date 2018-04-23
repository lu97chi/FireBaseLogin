import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {
  MzButtonModule, MzCardModule, MzPaginationModule, MzFeatureDiscoveryModule,
  MzIconModule, MzIconMdiModule
} from 'ng2-materialize'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  form: FormGroup;
  public items: Observable<any[]>;
  constructor(private formBuilder: FormBuilder, private db: AngularFirestore, private afAuth: AngularFireAuth) {
    this.createForm();
    this.items = db.collection('items').valueChanges();
    afAuth.authState.subscribe(user =>{
      if(!user){
        return;
      }else{
        //UID
        console.log('Estado del usuario', user)
      }
    })
   
  }
  ngOnInit(): void {

  }

  createForm() {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    const user = {
      email: this.form.get('email').value,
      password: this.form.get('password').value
    }
    console.log(user);

  }

  socialLogin(e:String){
    if(e === 'google'){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }else if(e === 'twitter'){
      this.afAuth.auth.signInWithPopup(new firebase.auth.TwitterAuthProvider());
    }else if (e === 'facebook'){
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider());
    }
  }

  logOut(){
    this.afAuth.auth.signOut();
  }


}