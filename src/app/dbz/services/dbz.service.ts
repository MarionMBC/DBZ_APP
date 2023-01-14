import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class DbzService {
  private _personajes: Personaje [] = []

  get personajes ():Personaje[] {
    return [...this._personajes]
  }

  get print():any {
    return console.log('Hola');
  }


  constructor (private http:HttpClient, ) {
    http.get('https://heroes-angular01-default-rtdb.firebaseio.com/.json')
    .subscribe ((res:Personaje|any) =>{
      this._personajes = res
    })
  }


  /**
  * * método: nuevoPersonaje
  * ! Usar _personajes, es un atributo privado.
  * @param argumento Recibe el objeto
  * de tipo Personaje
  */
  nuevoPersonaje (argumento:Personaje) {
    this._personajes.push(argumento)
  }

}
