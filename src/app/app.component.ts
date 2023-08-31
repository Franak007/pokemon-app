import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  template: `<h1>Welcome Angular {{pokemonList[1]}}</h1>`
})
export class AppComponent implements OnInit {
  title: string = 'pokemon-app';
  pokemonList = ["Pikachu", "Salamèche", "Lippoutou"];

  ngOnInit(): void {
    console.log("Je viens de charger!");
    console.table(this.pokemonList);
  }
}
