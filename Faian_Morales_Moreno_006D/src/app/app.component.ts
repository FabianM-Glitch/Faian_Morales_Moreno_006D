import { Component } from '@angular/core';

interface Componente{
  icon: string;
  name: string;
  redirecTo:string;

}


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

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
      name: '♦ Ingresa tu Usuario ♦', 
      redirecTo: '/input'
    },
    {
      icon: 'game-controller-outline', 
      name: '♦ Conoce Genshin ♦', 
      redirecTo: '/task'
    },
  ]

  constructor() {}

}
