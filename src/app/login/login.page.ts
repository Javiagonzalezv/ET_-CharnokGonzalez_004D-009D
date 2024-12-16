import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userdata:any;

  User={
    nombre:"",
    apellido:"",
    rut:"",
    email:"",
    password:"",
    isactive:false
  }

  loginForm:FormGroup;

  constructor(private authservice:AuthService, 
              private router:Router, 
              private toast: ToastController,
              private alertcontroller: AlertController, 
              private builder: FormBuilder) {
                this.loginForm = this.builder.group({
                  'email' : new FormControl("", [Validators.required, Validators.email]),
                  'password' : new FormControl("", [Validators.required, Validators.minLength(8)]),
                })
              }

  ngOnInit() {
  }

  login(){
    if (!this.loginForm.valid){
      return;
    }
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authservice.GetUsuarioEmail(email).subscribe(resp =>{
      this.userdata = resp;
      console.log(this.userdata);
      if (this.userdata.length === 0) {
        this.loginForm.reset();
        this.UsuarioNoExiste();
        return;
      }

      this.User={
        nombre: this.userdata[0].nombre,
        apellido: this.userdata[0].apellido,
        rut: this.userdata[0].rut,
        email: this.userdata[0].email,
        password: this.userdata[0].password,
        isactive: this.userdata[0].isactive
      }
      if (this.User.password !== password) {
        this.loginForm.reset();
        this.ErrorUsuario(); 
        return;
      }
      if (!this.User.isactive) {
        this.loginForm.reset();
        this.UsuarioInactivo();
        return;
      }
      this.IniciarSesion(this.User);
    })
 }


  private IniciarSesion(User:any){
    sessionStorage.setItem('rut', User.rut);
    sessionStorage.setItem('nombre', User.nombre);
    sessionStorage.setItem('apellido', User.apellido);
    sessionStorage.setItem('email', User.email);
    sessionStorage.setItem('password', User.password);
    sessionStorage.setItem('ingresado', 'true');
    this.showToast('Sesión Iniciada '+ this.User.nombre);
    this.router.navigate(['/dashboard']);

  }

  
  async showToast(msg: any){
    const toast= await this.toast.create({
      message:msg,
      duration: 3000
    })
    toast.present();
  }

  
  async UsuarioInactivo(){
    const alerta = await this.alertcontroller.create({ 
      header : 'Usuario inactivo',
      message : 'Contactar a admin@admin.cl',
      buttons : ['OK']
    })
    alerta.present();
  }

  
async ErrorUsuario(){
  const alerta = await this.alertcontroller.create({ 
    header : 'Error..',
    message : 'Revise sus credenciales',
    buttons : ['OK']
  })
  alerta.present();
}

async UsuarioNoExiste(){
  const alerta = await this.alertcontroller.create({ 
    header : 'No existe...',
    message : 'Debe registrarse..',
    buttons : ['OK']
  })
  alerta.present();
}
}
