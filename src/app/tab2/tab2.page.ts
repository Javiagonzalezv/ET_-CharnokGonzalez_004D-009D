import { Component, OnInit } from '@angular/core';
import { ApicrudService } from '../services/apicrud.service';
import { ICursos } from '../interfaces/cursos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  cursos: ICursos []=[]

  constructor(private apicrud:ApicrudService,
              private router:Router) {}
  
  ngOnInit(){
    this.apicrud.getCursos().subscribe(data => {
      this.cursos = data;
    })
  }

  asistencia(){
    this.router.navigate(['/asistencia']);
  }

  justifica(){
    this.router.navigate(['/justifica'])
  }

}
