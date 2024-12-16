import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbsenceJustificationPage } from './absence-justification.page';

const routes: Routes = [
  {
    path: '',
    component: AbsenceJustificationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbsenceJustificationPageRoutingModule {}
