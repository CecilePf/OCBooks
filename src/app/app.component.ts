import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OCBooks';

  constructor() {
    var config = {
        apiKey: "AIzaSyAsHY7Gn4o8a_TdRL9lN_6CYA6NYK_j_i8",
        authDomain: "ocbook-d73eb.firebaseapp.com",
        databaseURL: "https://ocbook-d73eb.firebaseio.com",
        projectId: "ocbook-d73eb",
        storageBucket: "ocbook-d73eb.appspot.com",
        messagingSenderId: "982513183870"
    };
    firebase.initializeApp(config);
  }
}
