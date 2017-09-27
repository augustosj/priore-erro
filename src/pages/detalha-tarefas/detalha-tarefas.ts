import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detalha-tarefas',
  templateUrl: 'detalha-tarefas.html',
})
export class DetalhaTarefasPage {

  tarefas:any = [
    'Introdução',
    'Desenvolvimento',
    'Referencial Teorico',
    'Conclusão'

  ];
  brightness;
  emGrupo:boolean = true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalhaTarefasPage');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}