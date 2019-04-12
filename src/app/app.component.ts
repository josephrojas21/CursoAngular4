import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tijuana';
  // a=3;
  // b=5;
  // listo=false;
  // nombre: string='';
  // nombre2='';
  lugares:any =[
    {plan: 'pagado',cercania: 1, distancia: 1,active: true, nombre:'Floreria la gardenia'},
    {plan: 'gratuito',cercania: 1, distancia: 1.8,active: true,nombre:'Donas la pasadita'},
    {plan: 'gratuito',cercania: 2, distancia: 5,active: true,nombre:'Veterinaria huellitas felices'},
    {plan: 'gratuito',cercania: 3, distancia: 10,active: false,nombre:'sushi sushiroll'},
    {plan: 'pagado',cercania: 3, distancia: 35,active: true,nombre:'Hotel la gracia'},
    {plan: 'gratuito',cercania: 3, distancia: 120,active: false,nombre:'Zapateria el clavo'}
  ];

  lat:number =6.1455606;
  lng:number =-75.6118513;

  constructor(){
    // setTimeout(()=>{
    //   this.listo=true;
    // }, 3000)
  }

  // haceralgo(){
  //   alert('holasss')
  // }
}
