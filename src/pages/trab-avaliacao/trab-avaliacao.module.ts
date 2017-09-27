import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrabAvaliacao } from './trab-avaliacao';

@NgModule({
  declarations: [
    TrabAvaliacao,
  ],
  imports: [
    IonicPageModule.forChild(TrabAvaliacao),
  ],
  exports: [
    TrabAvaliacao
  ]
})
export class TrabAvaliacaoModule {

}
