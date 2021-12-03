import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  typesOfOperators = ['Sumar', 'Restar', 'Multiplicar', 'Potencia'];


  constructor(){}

  selected(value: any){
    let result = value.toString();
    console.log("Holi" + result);
  }

}
