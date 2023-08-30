import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<h1>Welcome Angular {{pokemons[1]}}</h1>`
})
export class AppComponent {
  title: string = 'pokemon-app';
  pokemons = ["Pikachu", "Salamèche", "Lippoutou"]
}
