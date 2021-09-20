import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] =[
    {
      icon: 'game-controller-outline',
      name: '♦ Home ♦', 
      redirecTo: '/action-sheet'
    },
    {
      icon: 'game-controller-outline', 
      name: '♦ Personajes ♦', 
      redirecTo: '/alert'
    },
    {
      icon: 'game-controller-outline', 
      name: '♦ Ingresa tu usuario ♦', 
      redirecTo: '/input'
    },
    {
      icon: 'game-controller-outline', 
      name: '♦ Conoce Genshin ♦', 
      redirecTo: '/task'
    },
  ]
  constructor(private menuController: MenuController) {}

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');
  }

}
