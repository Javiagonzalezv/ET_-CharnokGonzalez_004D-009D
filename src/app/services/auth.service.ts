import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { newUser, IUsers } from '../interfaces/users';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpclient: HttpClient) { }

  GetAllUsers():Observable<IUsers[]>{
    return this.httpclient.get<IUsers[]>(`${environment.apiUrl}/usuarios`);
  }

  IsLoggedIn(){
    return sessionStorage.getItem('email')!=null;
  }

  PostUsuario(newUsuario:newUser): Observable<newUser>{
    return this.httpclient.post<IUsers>(`${environment.apiUrl}/usuarios`, newUsuario);
  }
  
  GetUsuarioEmail(email:String):Observable<IUsers>{
    return this.httpclient.get<IUsers>(`${environment.apiUrl}/usuarios/?email=${email}`);
  }

  GetRutUsuario(rut:String):Observable<IUsers>{
    return this.httpclient.get<IUsers>(`${environment.apiUrl}/usuarios/?rut=${rut}`);
  }

}
