import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { ApicrudService } from '../services/apicrud.service';
import { AlertController } from '@ionic/angular';
import { newjustifica, } from '../interfaces/justificacion';

@Component({
  selector: 'app-justifica',
  templateUrl: './justifica.page.html',
  styleUrls: ['./justifica.page.scss'],
})
export class JustificaPage implements OnInit {

  justificaForm :FormGroup;

  NewJustifica:newjustifica={
    id:"",
    rut:"",
    asignatura: "",
    description: "",
    fecha: new Date(),
    profesor: "",
  }
  

  justificacion:any;

  constructor(private apicrudservice:ApicrudService, 
              private alertcontroller: AlertController,
              private router: Router,
              private fBuilder: FormBuilder) {
                    this.justificaForm = this.fBuilder.group({
                      'rut':new FormControl(sessionStorage.getItem('rut')),
                      'asignatura': new FormControl("", [Validators.required ]),
                      'descripcion': new FormControl("", [Validators.required]),
                      'fecha': new FormControl(""),
                      'profesor': new FormControl("", [Validators.required]),
                      'imagen': new FormControl("", [Validators.required])
                    })
     }

  ngOnInit() {
  }

  justificar(){
   if (this.justificaForm.valid){
      this.apicrudservice.getjustificarut(this.justificaForm.value.rut).subscribe(resp=>{
        this.justificacion = resp; 
        if(this.justificacion.length>0){
           this.justificaForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.NewJustifica.rut = this.justificaForm.value.rut;
          this.NewJustifica.asignatura = this.justificaForm.value.username;
          this.NewJustifica.profesor = this.justificaForm.value.password;
          this.NewJustifica.fecha = this.justificaForm.value.fecha;
          this.NewJustifica.description = this.justificaForm.value.email;
          this.apicrudservice.postJustifica(this.NewJustifica).subscribe();
          this.justificaForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/justifica');
        }
      })
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Entendido',
      message: 'justificacion enviada',
      buttons: ['OK']
    });
    alerta.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertcontroller.create({
      header: 'Error..',
      message: 'Usted ya esta justificado',
      buttons: ['OK']
    });
    alerta.present();
  }

}
