import { Component , OnInit} from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public alertCtrl: AlertController) {}

  ngOnInit() {}


  async presentAlert() {
		const alert = await this.alertCtrl.create({
			cssClass: 'my-custom-class',
			header: 'Alert',
			subHeader: 'Subtitle',
			message: 'This is an alert message.',
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Cancelar');
					},
				},
				{
					text: 'OK',
					cssClass: 'secondary',
					handler: (blah) => {
						console.log('Boton OK');
					},
				},
			],
		});

		await alert.present();
	}

	async presentAlertPrompt() {
		const alert = await this.alertCtrl.create({
			cssClass: 'my-custom-class',
			header: 'Prompt!',
			inputs: [
				{
					name: 'txtInput',
					type: 'text',
					placeholder: 'Placeholder 1',
				},
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					cssClass: 'secondary',
					handler: () => {
						console.log('Confirm Cancel');
					},
				},
				{
					text: 'Ok',
					handler: (data) => {
						console.log('Confirm Ok', data);
					},
				},
			],
		});

		await alert.present();
	}
}
