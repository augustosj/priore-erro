import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularFireModule } from "angularfire2";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TarefasPage } from '../pages/tarefas/tarefas';
import { TrabAvaliacao } from './../pages/trab-avaliacao/trab-avaliacao';
import { TarefasCadastroPage } from "../pages/tarefas-cadastro/tarefas-cadastro";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from "../pages/login/login";
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { RegisterPage } from "../pages/register/register";
import { HttpProvider } from '../providers/http/http';
import { BuscatarefasProvider } from '../providers/buscatarefas/buscatarefas';
import { CalendarioPage } from "../pages/calendario/calendario";
import { PerfilPage } from "../pages/perfil/perfil";
import { ConfiguracaoPage } from "../pages/configuracao/configuracao";
import { TrabAvaliacaoCadastroPage } from "../pages/trab-avaliacao-cadastro/trab-avaliacao-cadastro";
import { DetalhaTarefasPage } from "../pages/detalha-tarefas/detalha-tarefas";
import { ContactServerProvider } from '../providers/contact-server/contact-server';


export const firebaseConfig = {
  apiKey: "AIzaSyCj06ewvnjsGFUHzengw9eiruLgpevs-1A",
  authDomain: "priore-api.firebaseapp.com",
  databaseURL: "https://priore-api.firebaseio.com",
  projectId: "priore-api",
  storageBucket: "priore-api.appspot.com",
  messagingSenderId: "756526733998"

};

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    TarefasPage,
    TarefasCadastroPage,
    DetalhaTarefasPage,
    CalendarioPage,
    TrabAvaliacao,
    TrabAvaliacaoCadastroPage,
    PerfilPage,
    ConfiguracaoPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase, 'my-app'),
    AngularFireDatabaseModule,
    AngularFireAuthModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
    TarefasPage,
    TarefasCadastroPage,
    DetalhaTarefasPage,
    CalendarioPage,
    TrabAvaliacao,
    TrabAvaliacaoCadastroPage,
    PerfilPage,
    ConfiguracaoPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    HttpProvider,
    BuscatarefasProvider,
    ContactServerProvider
  ]
})
export class AppModule {}
