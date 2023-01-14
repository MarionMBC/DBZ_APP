import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  nuevo:Personaje = {
    name: "",
    power:0
  }

  // agregarNuevoPersonaje(newCharacter:Personaje) {
  // }

  constructor ()
  {}

}
