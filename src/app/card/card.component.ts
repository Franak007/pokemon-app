import {Component, OnInit} from '@angular/core';
import {POKEMONS} from "../mock-pockemons-list";
import {Pokemon} from "../pokemons";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-card',
  templateUrl: `card.component.html`,
  styles: []
})
export class CardComponent implements OnInit{

  title: string = 'pokemon-app';
  pokemon: Pokemon;
  pokemonList: Pokemon[] = [];
  pokemonSelected: Pokemon;

  constructor (private pokemonService:PokemonService) {

  }

  ngOnInit(): void {
    this.getPokemons();

    console.log("Je viens de charger!");
    console.table(this.pokemonList);

  }

  selectPokemon(id:number): void {
    console.log("Vous avez sélectionné ce Pokemon : " );
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

  getPokemonByName(pokemon:Pokemon) {
    console.log(this.pokemonService.fetchByName(pokemon))
  }
}

