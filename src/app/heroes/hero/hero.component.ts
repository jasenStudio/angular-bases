import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css'],
})


export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toLocaleUpperCase();
  }

  getHeroeDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHeroe():void{
    this.name = "SpiderMan";
  }

  changeAge():void {
    this.age = 46;
  }

  resetForm(){
    this.name = "Ironman";
    this.age  = 45;
  }


}
