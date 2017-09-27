import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhaCalendarioPage } from './detalha-calendario';

@NgModule({
  declarations: [
    DetalhaCalendarioPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhaCalendarioPage),
  ],
  exports: [
    DetalhaCalendarioPage
  ]
})
export class DetalhaCalendarioPageModule {}
