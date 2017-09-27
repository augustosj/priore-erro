import { ContactServerProvider } from './../../providers/contact-server/contact-server';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Component } from '@angular/core';

/*
export class Tarefa{
    id: string;
    nome: string;
    data: string;
    descricao: string;
    disciplina: string;   
}*/
@Component ({
    selector: 'tarefas-cadastro',
    templateUrl: 'tarefas-cadastro.html'
})
export class TarefasCadastroPage{

    contactName: string;
    contactKey: string;

    public event = {
        month: '2018-05-01',
        timeStarts: '07:43',
        timeEnds: '1990-02-20'
    }
    
    constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, private contactService: ContactServerProvider){
        this.contactName = '';
        this.contactKey = '';
        if(this.navParams.data.contact){
            this.contactName = this.navParams.data.contact.name;
            this.contactKey = this.navParams.data.contact.$key;
            
        }
    }

    callCadastro(){
        this.contactService.save(this.contactName, this.contactKey);
        this.navCtrl.pop();
        

    }

}