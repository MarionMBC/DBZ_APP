import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input () nuevo: Personaje = {
    name: '',
    power: 0
  }

  agregar(){
    if (this.nuevo.name.trim().length ==0){
      return
    }

    this.nuevo = {
      name: '',
      power: 0
    }
  }


}
