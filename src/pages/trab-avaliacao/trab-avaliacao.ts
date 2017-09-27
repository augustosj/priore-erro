import { TarefasCadastroPage } from './../tarefas/tarefas-cadastro/tarefas-cadastro';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-trab-avaliacao',
  templateUrl: 'trab-avaliacao.html',
})
export class TrabAvaliacao {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrabAvaliacao');

  }

  /*
  onFabClicked(){
    this.navCtrl.push(TarefasCadastroPage);

  }*/

}
