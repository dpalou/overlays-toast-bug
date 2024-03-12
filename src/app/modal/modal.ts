import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.html',
})
export class MyModalPage {

  constructor(public toastController: ToastController) {}

  async openToast() {
    const toast = await this.toastController.create({
      message: 'A toast message',
      duration: 15000,
    });
    toast.present();
  }

}
