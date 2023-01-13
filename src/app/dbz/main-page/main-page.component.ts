import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  personajes: Personaje [] = []

  nuevo:Personaje = {
    name: "Marion",
    power: 3424234324
  }

  constructor (private http:HttpClient) {
    http.get('https://heroes-angular01-default-rtdb.firebaseio.com/.json')
    .subscribe ((res:Personaje|any) =>{
      this.personajes = res
      console.log(res);
    })
  }


}
