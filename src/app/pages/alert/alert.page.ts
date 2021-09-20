import { Component, OnInit } from '@angular/core';
import { AlertController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Ingresando Datos',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'name2',
          type: 'text',
          id: 'name2-id',
          value: 'hello',
          placeholder: 'Placeholder 2'
        },
        // multiline input.
        {
          name: 'paragraph',
          id: 'paragraph',
          type: 'textarea',
          placeholder: 'Placeholder 3'
        },
        {
          name: 'name3',
          value: 'http://ionicframework.com',
          type: 'url',
          placeholder: 'Favorite site ever'
        },
       
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        },
        {
          name: 'name6',
          type: 'number',
          min: -5,
          max: 10
        },
        {
          name: 'name7',
          type: 'number'
        },
        {
          name: 'name8',
          type: 'password',
          placeholder: 'Advanced Attributes',
          cssClass: 'specialClass',
          attributes: {
            maxlength: 8,
            inputmode: 'decimal'
          }
        }
      ],

      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

} //llave que cierra la clase

//Slide con arreglo (de momento no aplica con nada, solo de testeo)
const Slides = [
      {
        img: 'assets/img/Tarjeta_jean.png',
        titulo: 'Jean<br> la Caballera de Dandelion'
      },
      {
        img: 'assets/img/Tarjeta_diluc.jpg',
        titulo: 'Diluc<br> El Heroe Oscuro'
      },
      {
        img: 'assets/img/Tarjeta_ayaka.jpg',
        titulo: 'Kamisato Ayaka<br> La Flor de Hielo'
      },
      {
        img: 'assets/img/Tarjeta_zhongli.png',
        titulo: 'Zhongli<br> Rex Lapis'
      }
    ];