import { Component } from '@angular/core';
import { OptionService } from 'src/app/option.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

  optSelected:any;

  typesOfOperators = ['Sumar', 'Restar', 'Multiplicar', 'Potencia'];

  selected(event:any) {
    let value = event.option.value;
    this.optSelected = value;
    this.optionService.opt.emit({
      data:this.optSelected
    })
    console.log("Value: " + this.optSelected);
    return this.optSelected;
  }

  constructor(private optionService:OptionService){}

}
