import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OptionService {

  @Output() opt: EventEmitter<any> = new EventEmitter();

  constructor() { }
}
