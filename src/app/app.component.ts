import { NavbarComponent } from './shared/navbar/navbar.component';
import { Component, OnInit, Inject } from '@angular/core';
import { OptionService } from './option.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public opts: Array<any> = [];
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0

  constructor(private optionService: OptionService) { }


  ngOnInit(): void {
    this.optionService.opt.subscribe(data => {
      this.opts.push(data);
      console.log(this.opts);
    })
  }

  limpiar(){
    this.num1 = 0;
    this.num2 = 0;
    this.resultado = 0;
  }

  operar(): void {
    this.resultado = this.num1 + this.num2;
  }

}
