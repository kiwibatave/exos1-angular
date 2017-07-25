import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1> {{titre}}</h1>
  <h2>Mon footballeur préféré est : {{myFootballeur}}</h2>
  <button (click)=afficherDate()>{{button}}</button>
  <p>{{ date }}</p>
  <button (click)=afficheAlert()>{{bouton}}</button>
  <h1> La liste des langages que je connais </h1>
  <ul>
  <li *ngFor="let langage of langages">
   {{langage}}
   </li>
   </ul>
   <h1>Exo 5</h1>
   <p>
   <img [src]="imagePath">
   <button (click)=animatePhoto()>{{animation}}</button>
   </p>
   <h1>Exo 6</h1>
   <p>
   </p>
   <h1>Exo 7</h1>
   <p>
   <ul>
   <li *ngFor="let produit of produits">
   {{produit}}
   </li>
   </ul>
   <input #ingredientsAdd type="text" placeholder="ajoute ton ingrédient ici">
   <button (click)=addProduit(ingredientsAdd)>{{texte}}</button>


   `
  ,
})
export class AppComponent {
  // exo 1
  titre:string = 'Vive le foot !!';
  myFootballeur:string = 'Francis Llacer';
  // exo 2
  button:string = 'Quelle est la date du jour ?';
  date: Date;

  afficherDate () {
    this.date = new Date();
  };
  // exo 3
  bouton:string = 'ALERTEEEE!!!!';

  afficheAlert () {
    alert("Angular, c\'est de la  BOMBE !!!");
  }
  // exo 4
  langages:string [] = ['HTML', 'CSS', 'PHP', 'JAVACRIPT'];
  // exo 5
  imagePath:string = ('./image1.png');
  animation:string ='Click pour animer le bonhomme !!!';

  // exo 6

  // exo 7
  produits:string [] = ['pain', 'lait', 'beurre', 'farine'];
  texte:string = 'Click pour ajouter ton ingrédient';
}
