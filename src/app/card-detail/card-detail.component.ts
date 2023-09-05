import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-card-detail',
  templateUrl: `card-detail.component.html`,
  styles: []
})

export class CardDetailComponent implements OnInit{

  pokemon: Pokemon | undefined;
  constructor(private pokemonService: PokemonService, private route : ActivatedRoute) {

  }

  ngOnInit():void {
    this.route.params.subscribe( params => {

      const pokemonId = +params['id'];
      this.getPokemonById(pokemonId - 1);
    })
  }
  getPokemonById(id:number){
    this.pokemon = this.pokemonService.fetchById(id);
  }

}
