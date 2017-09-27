import { ContactServerProvider } from './../../providers/contact-server/contact-server';
import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// Do not import from 'firebase' as you'd lose the tree shaking benefits
import * as firebase from 'firebase/app';

import { TarefasCadastroPage } from "../tarefas-cadastro/tarefas-cadastro";
import { DetalhaTarefasPage } from "../detalha-tarefas/detalha-tarefas";

@Component({
  selector: 'page-tarefas',
  templateUrl: 'tarefas.html'
})
export class TarefasPage {


  items: FirebaseListObservable<any[]>;
  selectedItem: any;
  
  pFeito:boolean =  true;
  pHoje:boolean = true;
  pAmanha:boolean = true;
  pPSemana:boolean = true;
  pPMeses:boolean =  true;

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, db: AngularFireDatabase, afAuth: AngularFireAuth, private contactService: ContactServerProvider) {  
    this.items = this.contactService.getAll();

  }


  itemTapped(event, item) {
    this.navCtrl.push(TarefasPage, {
      item: item
    });
  }

  onFabClicked(){
    this.navCtrl.push(TarefasCadastroPage);

  }

  buscaTarefas(){

  }

  removeTarefa(item: any){
    this.contactService.remove(item.$key);
  }

  pressEvent(e){
    let modal = this.modalCtrl.create(DetalhaTarefasPage);
    modal.present();
  }

}
