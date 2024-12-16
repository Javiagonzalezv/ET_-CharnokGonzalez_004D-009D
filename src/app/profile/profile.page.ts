import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  nombre:any;
  apellido:any;
  correo:any;
  constructor() { }

  ngOnInit() {
    this.nombre = sessionStorage.getItem('nombre');
    this.apellido = sessionStorage.getItem('apellido');
    this.correo = sessionStorage.getItem('email');
  }

}
