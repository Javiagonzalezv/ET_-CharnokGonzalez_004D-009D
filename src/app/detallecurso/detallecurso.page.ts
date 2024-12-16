import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ICursos } from '../interfaces/cursos';
import { IUsers } from '../interfaces/users';
import { IQR } from '../interfaces/qr';
import { ApicrudService } from '../services/apicrud.service';

@Component({
  selector: 'app-detallecurso',
  templateUrl: './detallecurso.page.html',
  styleUrls: ['./detallecurso.page.scss'],
})
export class DetallecursoPage implements OnInit {

  qr:any;
  curso:any;

  rut:any;
  email:any;

  qrdata:string;

  clase={
    asignatura:"",
    profesor:"",
    descripcion:"",
    fecha:""
  }

  constructor(private activated: ActivatedRoute,
              private alertcontroller:AlertController,
              private apicrud:ApicrudService) {
                this.activated.queryParams.subscribe(param =>{
                  this.curso =JSON.parse(param['curso']);
                })
                this.qrdata='';
                this.rut= sessionStorage.getItem('rut');
                this.email= sessionStorage.getItem('email');
               }

  ngOnInit() {
    
    this.apicrud.getQR().subscribe((qrs:IQR[])=>{
      this.qr = qrs;})
    this.clase = this.curso;
  }

  generarQr(){
    this.qrdata='';
    this.qrdata = this.clase.asignatura + this.clase.profesor + this.clase.fecha+
                  this.rut + this.email;
    console.log(this.qrdata);
  }
}
