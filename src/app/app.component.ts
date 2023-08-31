import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: ``
})
export class AppComponent implements OnInit {
  title: string = 'pokemon-app';
  pokemonList: string[] = ["Pikachu", "Salamèche", "Lippoutou"];

  ngOnInit(): void {
    console.log("Je viens de charger!");
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);

  }

  selectPokemon(pokemon: string): void {
    console.log("Vous avez sélectionné ce Pokemon : " + pokemon)
  }
}
