import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1> {{titre}}</h1>
  <h2>Mon footballeur préféré est : {{myFootballeur}}</h2>
  <button (click)=afficherDate()>{{button}}</button>
  <p>{{ date }}</p>
  <button (click)=afficheAlert()>{{bouton}}</button>`
  ,
})
export class AppComponent {
  // exo 1
  titre:string = 'Vive le foot !!';
  myFootballeur:string = 'Francis Llacer';
  // exo 2
  button:string = 'Quelle est la date du jour ?';
  date : Date;

  afficherDate () {
    this.date = new Date();
  };
  // exo 3
  bouton:string = 'ALERTEEEE!!!!';

  afficheAlert () {
    alert("Angular, c\'est de la  BOMBE !!!");
  }


}
