import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
/*/
export class Tarefa{
    id: string;
    nome: string;
    data: string;
    descricao: string;
    disciplina: string;    
}
/*/
@Injectable()
export class ContactServerProvider {
  lista: FirebaseListObservable<any[]>;
  tarefa: string;
  constructor(private db: AngularFireDatabase, private angularFireAuth: AngularFireAuth) {
    angularFireAuth.authState.subscribe(user => {
      var path = '/contacts/' + user.uid;
      this.lista = db.list(path);
    });

    
  }

  
  public getAll(  ){
    return this.lista;

  }

  public save ( tarefa: string, key: string ) {
    if (key) {
      return this.lista.update (key, {tarefa: tarefa});

    } else {
      return this.lista.push({tarefa});

    }

  }

  public remove ( key: string ) {
    return this.lista.remove(key);
    
  }

}
