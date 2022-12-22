import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Enrique';
  age = 25;
  img = 'https://picsum.photos/200';
  btnDisabled = true;
  person = {
    name : 'Enrique',
    age :25,
    avatar : 'https://picsum.photos/900'
  }

  toggleButton (){
    this.btnDisabled = !this.btnDisabled;
  }

  addYears(){
    this.person.age +=1
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }
}
