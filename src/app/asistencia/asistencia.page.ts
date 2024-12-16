import { Component, OnInit } from '@angular/core';
import { ICursos } from '../interfaces/cursos';
import { ApicrudService } from '../services/apicrud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  clasesAlumno:any[]=[];  

  rut:any;

  cursos:ICursos[]=[];

  constructor(private apicrud:ApicrudService,
              private router:Router) { 
                this.rut = sessionStorage.getItem('rut');
              }

  ngOnInit() {
    this.clasesCreadas();
  }

  clasesCreadas(){
    this.apicrud.getCursos().subscribe((clases:ICursos[])=>{
      this.cursos = clases;
    })
    this.clasesInscritas();
  }

  clasesInscritas(){
    this.apicrud.getClasesUsuario(this.rut).subscribe((inscritas: any[]) => {

      this.clasesAlumno = inscritas.map(inscritas => {
        const clase = this.cursos.find(c => c.id === inscritas.inscritos );
        if (clase) {
          const resultado = {
            ...inscritas,
            clase 
          };
          return resultado;
        } else {
          return inscritas; 
        }
        });
    });
  }

  detalleCurso(Observable:any){
    this.router.navigate(['/detallecurso'],
      {queryParams:{curso: JSON.stringify(Observable)}}
    )
  }
  
}
