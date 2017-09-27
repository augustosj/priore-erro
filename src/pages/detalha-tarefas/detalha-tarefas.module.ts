import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhaTarefasPage } from './detalha-tarefas';

@NgModule({
  declarations: [
    DetalhaTarefasPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhaTarefasPage),
  ],
  exports: [
    DetalhaTarefasPage
  ]
})
export class DetalhaTarefasPageModule {}
