import { Component, OnInit } from '@angular/core';
import { Persona } from '../../model/persona';
import { ServicePersonas } from '../../services/service.personas';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-personasstandalone',
  templateUrl: './personasstandalone.component.html',
  styleUrl: './personasstandalone.component.css',
  //Poner el standalone significa que esta aislado
  standalone: true,
  imports:[NgFor, NgIf],
  providers:[ServicePersonas]
})
export class PersonasstandaloneComponent  implements OnInit {
  public personas!: Array<Persona>;

  constructor(private _service: ServicePersonas){}

  ngOnInit(): void {
    // 1. Esta peticion es con la promesa
    this._service.getPersonasPromesa().then(response =>{
      this.personas = response;
    })
    //2. Esta peticion es con el observable
    // this._service.getPersonas().subscribe(response =>{
    //   console.log("leyendo");
    //   this.personas = response;
    // })

  }
}
