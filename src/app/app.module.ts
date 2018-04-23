import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import {
  MzButtonModule, MzInputModule, MzCardModule, MzPaginationModule, MzFeatureDiscoveryModule,
  MzIconModule, MzIconMdiModule
} from 'ng2-materialize'
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    MzButtonModule,
    MzInputModule,
    MzCardModule,
    MzPaginationModule,
    MzFeatureDiscoveryModule,
    MzIconModule, 
    MzIconMdiModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
