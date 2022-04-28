import { Component } from '@angular/core';
import { AlertButton, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private alertCtrl : AlertController) {}

  async showAdd(){
    const alert = await this.alertCtrl.create({
      header: 'Qual sua próxima tarefa?',
      inputs: [
        {
          name: 'tarefa1',
          type: 'text',
          placeholder: 'Digite oque deseja fazer  '
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log('Cancelado com sucesso.')
          }
        },
        {
          text: "Adicionar",
          handler:() =>{
            console.log("adicionado com sucesso.")
          }
        },
      ]
    });

    await alert.present();
  }

  async unread(item){
    console.log(item);   
  }

}
