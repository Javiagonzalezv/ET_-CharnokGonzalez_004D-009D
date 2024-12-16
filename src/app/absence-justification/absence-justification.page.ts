import { Component } from '@angular/core';

@Component({
  selector: 'app-absence-justification',
  templateUrl: 'absence-justification.page.html',
  styleUrls: ['absence-justification.page.scss'],
})
export class AbsenceJustificationPage {
  subjects: string[] = ['Matemática', 'Ciencias Naturales', 'Ciencias Sociales']; // Ejemplo de asignaturas
  selectedSubject: string = '';
  selectedDate: string = '';
  justifications: any[] = []; // Aquí puedes definir el tipo de datos según tus necesidades

  constructor() {}

  onSubjectChange() {
    // Maneja el cambio de asignatura si es necesario
  }

  loadJustifications() {
    // Aquí puedes agregar la lógica para cargar las justificaciones
    // Ejemplo de datos estáticos para pruebas
    this.justifications = [
      { studentName: 'Yerai', reason: 'Se desmayó en el baño xd' },
      
    ];
  }
}

