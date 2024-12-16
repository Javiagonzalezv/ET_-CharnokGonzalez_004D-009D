import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { newUser } from '../interfaces/users';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  registroForm: FormGroup;

  newUser: newUser={
    nombre:"",
    apellido:"",
    rut:"",
    email:"",
    password:"",
    isactive:false
  }

  userdata:any;

  constructor(private authservice: AuthService, 
              private alertcontroller: AlertController,
              private router: Router,
              private fBuilder: FormBuilder) {
                this.registroForm = this.fBuilder.group({ 
                  'nombre' : new FormControl ("", [Validators.required ]),
                  'apellido': new FormControl("", [Validators.required ]),
                  'rut': new FormControl("", [Validators.required, Validators.minLength(10)]),
                  'email': new FormControl("", [Validators.required, Validators.email]),
                  'password': new FormControl("", [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
                })
               }

  ngOnInit() {
  }

  registrar(){
    if (this.registroForm.valid){
      this.authservice.GetRutUsuario(this.registroForm.value.rut).subscribe(resp=>{
        this.userdata = resp; 
        if(this.userdata.length>0){
           this.registroForm.reset();
          this.errorDuplicidad();
        }
        else{
          this.newUser.nombre = this.registroForm.value.nombre;
          this.newUser.apellido = this.registroForm.value.apellido;
          this.newUser.rut = this.registroForm.value.rut;
          this.newUser.email = this.registroForm.value.email;
          this.newUser.password = this.registroForm.value.password;
          this.newUser.isactive=true;
          this.authservice.PostUsuario(this.newUser).subscribe();
          this.registroForm.reset();
          this.mostrarMensaje();
          this.router.navigateByUrl('/inicio');
        }
      })
    }
  }

  async mostrarMensaje(){
    const alerta = await this.alertcontroller.create({
      header: 'Usuario creado',
      message: 'Bienvenid@! ' + this.newUser.nombre,
      buttons: ['OK']
    });
    alerta.present();
  }

  async errorDuplicidad(){
    const alerta = await this.alertcontroller.create({
      header: 'Error..',
      message: 'Usted '+ this.newUser.nombre + ' ya esta registrado:D',
      buttons: ['OK']
    });
    alerta.present();
  }
}
