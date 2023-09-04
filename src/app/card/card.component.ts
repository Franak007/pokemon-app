import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "../mock-pockemons-list";
import {Pokemon} from "../pokemons";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`,
  styles: []
})
export class CardComponent {

  title: string = 'pokemon-app';
  pokemonList: Pokemon[] = [];
  pokemonSelected: Pokemon;

  constructor (private pokemonService:PokemonService) {

  }

  ngOnInit(): void {
    this.getPokemons();

    console.log("Je viens de charger!");
    console.table(this.pokemonList);

    this.selectPokemon(this.pokemonList[0]);

  }

  selectPokemon(pokemon: Pokemon): void {
    console.log("Vous avez sélectionné ce Pokemon : " + pokemon.name);
  }

  afficheNumberPokemon(index: number)  {

    this.pokemonSelected = this.pokemonList[index - 1];
    console.log("Vous avez recherché ce Pokemon : " + this.pokemonSelected.name);

    // console.log(this.selectPokemon(this.pokemonList[form -1]));
  }

  getPokemons() {
    this.pokemonList = this.pokemonService.fetchAllPokemon();
    return this.pokemonList;
  }
}

