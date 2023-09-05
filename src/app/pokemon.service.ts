import { Injectable } from '@angular/core';
import {Pokemon} from "./pokemons";
import {POKEMONS} from "./mock-pockemons-list";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  fetchAllPokemon(){
    return POKEMONS;
  }

  fetchById(id:number):Pokemon|undefined{
    return POKEMONS[id];
  }

  fetchByName(pokemon: Pokemon){
    return pokemon.name;
  }


}
