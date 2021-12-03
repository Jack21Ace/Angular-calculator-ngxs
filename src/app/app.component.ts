import { Component, OnInit } from '@angular/core';
import { OptionService } from './option.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public opts: Array<any> = [];
  num1 = 0;
  num2 = 0;
  resultado = 0

  constructor(private optionService: OptionService) { }

  operaciones = [
    { valor: 'Sumar', muestraValor: 'Sumar' },
    { valor: 'Restar', muestraValor: 'Restar' },
    { valor: 'Multiplicar', muestraValor: 'Multiplicar' },
    { valor: 'Potencia', muestraValor: 'Potencia' }
  ];

  seleccionada: string = this.operaciones[0].valor;

  ngOnInit(): void {
    this.optionService.opt.subscribe(data => {this.opts.push(data);})
  }

  operar() {
    switch (this.seleccionada) {
      case 'Sumar': this.resultado = this.num1 + this.num2;
        break;
      case 'Restar': this.resultado = this.num1 - this.num2;
        break;
      case 'Multiplicar': this.resultado = this.num1 * this.num2;
        break;
      case 'Potencia': this.resultado = this.num1 ** this.num2;
        break;
    }
  }

}
