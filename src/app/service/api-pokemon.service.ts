import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../components/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  pokemons:Array<Pokemon> = [];

  constructor( private httpClient:HttpClient) {
    this.getPokemons();
   }
  async getPokemons() {
    const request = await this.httpClient.get<any>(' https://pokeapi.co/api/v2/pokemon?limit=30').toPromise();
    
    this.pokemons = request.results;
    console.log(this.pokemons);
        
  }
}
 