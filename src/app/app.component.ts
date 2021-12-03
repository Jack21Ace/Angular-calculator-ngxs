import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{

  num1 = 0;
  num2 = 0;
  resultado = 0

  operaciones = [
    {valor:'Sumar', muestraValor:'Sumar'},
    {valor:'Restar', muestraValor:'Restar'},
    {valor:'Multiplicar', muestraValor:'Multiplicar'},
    {valor:'Potencia', muestraValor:'Potencia'}
  ];

  seleccionada: string = this.operaciones[0].valor;

  operar() {
    switch (this.seleccionada) {
      case 'Sumar' : this.resultado = this.num1 + this.num2;
                    break;
      case 'Restar' : this.resultado = this.num1 - this.num2;
                    break;
      case 'Multiplicar' : this.resultado = this.num1 * this.num2;
                    break;
      case 'Dividir' : this.resultado = this.num1 ** this.num2;
                    break;
    }
  }


}
