import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';
import { CredenciaisDTO } from '../../models/Credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creds : CredenciaisDTO = {
    email: "",
    senha:""
  };

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService) {

  }

  ionViewWillEnter(){
    this.menu.swipeEnable(false)
  }

  ionViewDidLeave(){
    this.menu.swipeEnable(true)
  }

  login(){
    this.auth.authenticate(this.creds)
    .subscribe(response =>{
      this.auth.successfullLogin(response.headers.get('Authorization'));
      this.navCtrl.setRoot('CategoriasPage');
      },
      error=>{
        
      })
  }

}
