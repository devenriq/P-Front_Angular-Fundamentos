import { Component } from '@angular/core';

import { Product } from "./product.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  widthImg = 10;
  name = 'Enrique';
  age = 25;
  img = 'https://picsum.photos/200';
  btnDisabled = true;
  person = {
    name : 'Enrique',
    age :25,
    avatar : 'https://picsum.photos/900'
  }

  names: string[]=['enrique','Diana', 'rodrigo'];
  newName = '';
  box={
    width:100,
    height:100,
    background: 'red',
  }
  products:Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://picsum.photos/400',
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://picsum.photos/401'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://picsum.photos/402'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://picsum.photos/403'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://picsum.photos/404'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://picsum.photos/405'
    }
  ]

  toggleButton (){
    this.btnDisabled = !this.btnDisabled;
  }

  addYears(){
    this.person.age +=1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    // console.log(element.scrollTop)
    console.log(element)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }

  addName(){
    this.names.push(this.newName)
    this.newName = ''
  }

  deleteName(index:number){
    this.names.splice(index,1)
  }
}
