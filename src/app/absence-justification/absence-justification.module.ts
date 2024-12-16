import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbsenceJustificationPageRoutingModule } from './absence-justification-routing.module';

import { AbsenceJustificationPage } from './absence-justification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbsenceJustificationPageRoutingModule
  ],
  declarations: [AbsenceJustificationPage]
})
export class AbsenceJustificationPageModule {}
