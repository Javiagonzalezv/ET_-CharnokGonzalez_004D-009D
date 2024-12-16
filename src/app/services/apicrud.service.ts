import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICursos } from '../interfaces/cursos.ts';

@Injectable({
  providedIn: 'root'
})
export class ApicrudService {

  constructor(private Httpclient: HttpClient) { }

  getCursos(){
    return this.Httpclient.get<ICursos[]>(`${environment.apiUrl}/cursos`);
  }
}
