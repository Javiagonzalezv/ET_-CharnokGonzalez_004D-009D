import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JustificaPage } from './justifica.page';

const routes: Routes = [
  {
    path: '',
    component: JustificaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JustificaPageRoutingModule {}
