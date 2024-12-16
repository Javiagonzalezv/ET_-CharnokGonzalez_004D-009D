import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetallecursoPageRoutingModule } from './detallecurso-routing.module';

import { DetallecursoPage } from './detallecurso.page';
import { QRCodeModule } from 'angularx-qrcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallecursoPageRoutingModule,
    QRCodeModule
  ],
  declarations: [DetallecursoPage]
})
export class DetallecursoPageModule {}
