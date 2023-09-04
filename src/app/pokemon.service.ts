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
}
