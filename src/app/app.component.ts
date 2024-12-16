import { Component } from '@angular/core';


interface Menu{
  icon:string;
  name:string; 
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  
  menu:Menu[]=[
    
    {
      icon:'apps-outline',
      name:'Inicio',
      redirecTo: '/tabs/tab1'
    },
    {
      icon:'calendar-outline',
      name:'Asistencia',
      redirecTo: '/tabs/tab2'
    },
    {
      icon:'person-circle-outline',
      name:'Perfil',
      redirecTo: '/tabs/tab3'
    },
  ]

  constructor() {}

 
}
