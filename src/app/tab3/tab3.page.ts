import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  nombre:any;

  apellido:any;

  correo:any;

  constructor(){
  }

  
  ngOnInit(){
    this.nombre = sessionStorage.getItem('nombre');
    this.apellido = sessionStorage.getItem('apellido');
    this.correo = sessionStorage.getItem('email');
  }

}
