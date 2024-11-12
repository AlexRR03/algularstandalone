import { Injectable } from "@angular/core";
import { Persona } from "../model/persona";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ServicePersonas{
 //Para las peticiones api viene un objeto llamado HttpClient que nos permitira realizar las peticiones
  constructor(private _http: HttpClient){}

  getPersonas(): Observable<any>{
    let urlApiPersona = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas"
    //Tenemos dos formas de realizar la funcionalidad de devolucion de datos
    //1) La primera forma es igual q es vue creando una promesa por encima de este metodo
    //2) La segunda seria devolver la peticion directamente para que sea del component quien se subscriba
    return this._http.get(urlApiPersona);
  }

  getPersonasPromesa(): Promise<any>{
    let urlApiPersona = "https://servicioapipersonasmvcpgs.azurewebsites.net/api/personas";
    let promise = new Promise((resolve) =>{
      this._http.get(urlApiPersona).subscribe((response) =>{
        resolve(response);
      })
    })
    return promise;
  }
}
