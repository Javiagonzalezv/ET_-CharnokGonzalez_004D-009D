import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class-management',
  templateUrl: 'class-management.page.html',
  styleUrls: ['class-management.page.scss'],
})
export class ClassManagementPage {
  subjects: string[] = ['Matemática', 'Ciencias Naturales', 'Ciencias Sociales']; // Aqui puedo insertar más clases
  selectedSubject: string = '';

  constructor(private router: Router) {}

  onSubjectChange() {
    // Pa cambiar de asignatura (Recordad)
  }

  startAttendance() {
    // Pa la asistencia
  }
}
