import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  /*
  * El Output se dispara
  * onNewCharacter: Nombre del evento
  * EventEmitter: El tipo de evento que se dispara
  * <Personaje>: Tipo de dato que emite el evento
  */
  @Output() onNewCharacter: EventEmitter<Personaje> = new EventEmitter<Personaje>();


  /*
  *this.nuevo.name.trim().length ==0: Recorta los espacios en blanco y luego verifica si tiene length 0
  * Al presionar el botón Agregar, se emite el evento
  * this.nuevo.
  * Se reinician los inputs
  *
  */
  agregar(){
    if (this.nuevo.name.trim().length ==0){
      return
    }

    console.log(this.nuevo);
    this.onNewCharacter.emit(this.nuevo)

    this.nuevo = {
      name: '',
      power: 0
    }
  }


}
