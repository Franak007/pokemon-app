import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "../mock-pockemons-list";
import {Pokemon} from "../pokemons";

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`,
  styles: []
})
export class CardComponent {

  title: string = 'pokemon-app';
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit(): void {
    console.log("Je viens de charger!");
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);

  }

  selectPokemon(pokemon: Pokemon): void {
    console.log("Vous avez sélectionné ce Pokemon : " + pokemon.name);
  }
}
