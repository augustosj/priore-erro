import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TrabAvaliacao } from './../pages/trab-avaliacao/trab-avaliacao';
import { TarefasPage } from './../pages/tarefas/tarefas';
import { LoginPage } from "../pages/login/login";
import { CalendarioPage } from "../pages/calendario/calendario";
import { PerfilPage } from "../pages/perfil/perfil";
import { ConfiguracaoPage } from "../pages/configuracao/configuracao";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  // NOME E EMAIL DO USUÁRIO
  menu:object = {
    nome: 'Jana da Silva',
    email:  'exemplo@exemplo.priore.br'
  };
  
  

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    //LISTA PARA PAGINAS DO MENU
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Tarefas', component: TarefasPage },
      { title: 'Calendário e Eventos', component: CalendarioPage },
      { title: 'Trabalhos e Avaliações', component: TrabAvaliacao },
      { title: 'Perfil', component: PerfilPage},
      { title: 'Configurações', component: ConfiguracaoPage },
    ];

  }

  //AO INICIAR A PAGINA
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

}
