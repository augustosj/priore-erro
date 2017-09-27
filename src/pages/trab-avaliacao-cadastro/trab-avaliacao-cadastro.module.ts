import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrabAvaliacaoCadastroPage } from './trab-avaliacao-cadastro';

@NgModule({
  declarations: [
    TrabAvaliacaoCadastroPage,
  ],
  imports: [
    IonicPageModule.forChild(TrabAvaliacaoCadastroPage),
  ],
  exports: [
    TrabAvaliacaoCadastroPage
  ]
})
export class TrabAvaliacaoCadastroPageModule {}
