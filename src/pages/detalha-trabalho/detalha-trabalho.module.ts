import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhaTrabalhoPage } from './detalha-trabalho';

@NgModule({
  declarations: [
    DetalhaTrabalhoPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhaTrabalhoPage),
  ],
  exports: [
    DetalhaTrabalhoPage
  ]
})
export class DetalhaTrabalhoPageModule {}
