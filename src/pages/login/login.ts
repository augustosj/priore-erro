import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, Loading } from 'ionic-angular';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { RegisterPage } from "../register/register";

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  auth: any;
  loading: Loading;
  registerCredentials = {
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '', 
    password: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, auth: AuthServiceProvider, private alertCtrl: AlertController, private loadingCtrl: LoadingController ) {
    this.auth = auth;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  public createAccount(){
    this.navCtrl.push(RegisterPage);

  }
  public login() {

    this.showLoading()
    this.auth.login(this.registerCredentials).subscribe(allowed => {
      if (allowed) {        
        this.navCtrl.setRoot('HomePage');
      } else {
        //this.showError("Access Denied");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

}
