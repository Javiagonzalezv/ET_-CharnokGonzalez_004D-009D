import { Component } from '@angular/core';

@Component({
  selector: 'app-attendance-list',
  templateUrl: 'attendance-list.page.html',
  styleUrls: ['attendance-list.page.scss'],
})
export class AttendanceListPage {
  students:string[]=['juan carlos','arthur morgan','luis prat']
  // Aquí puedes agregar lógica para manejar la lista de asistencia
  submitAttendance(){}
}
