import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICursos } from '../interfaces/cursos';
import { Ijustifica, newjustifica } from '../interfaces/justificacion';
import { IQR,newQR } from '../interfaces/qr';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private Httpclient: HttpClient) { }

  getCursos(){
    return this.Httpclient.get<ICursos[]>(`${environment.apiUrl}/cursos`);
  }

  getCursoID(id:number):Observable<ICursos>{
    return this.Httpclient.get<ICursos>(`${environment.apiUrl}/cursos/?id=${id}`);
  }

  getClasesUsuario(rut: string): Observable<any[]> {
    return this.Httpclient.get<any[]>(`${environment.apiUrl}/clasesAlumno?inscritos=${rut}`);
  }

  getJustifica():Observable<Ijustifica[]>{
    return this.Httpclient.get<Ijustifica[]>(`${environment.apiUrl}/justificacion`);
  }
  getjustificarut(rut:String):Observable<Ijustifica>{
    return this.Httpclient.get<Ijustifica>(`${environment.apiUrl}/justificacion/?rut=${rut}`);
  }

  postJustifica(newjustifica: newjustifica):Observable<Ijustifica>{
    return this.Httpclient.post<Ijustifica>(`${environment.apiUrl}/justificacion`, newjustifica);
  }

  getQR():Observable<IQR[]>{
    return this.Httpclient.get<IQR[]>(`${environment.apiUrl}/qr`);
  }
  getQRfecha(fecha:Date):Observable<IQR>{
    return this.Httpclient.get<IQR>(`${environment.apiUrl}/qr/?fecha=${fecha}`);
  }

  postQR(newqr: newQR):Observable<IQR>{
    return this.Httpclient.post<IQR>(`${environment.apiUrl}/qr`, newqr);
  }
}
