import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../components/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
<<<<<<< Updated upstream
  pokemons:Array<Pokemon> = [];
=======
  pokemons: any = [];
  types = [];
  names:Array<string> = [];
  
>>>>>>> Stashed changes

  constructor( private httpClient:HttpClient) {
    this.getPokemons();
    this.getNames();
   }
  async getPokemons() {
    const request = await this.httpClient.get<any>(' https://pokeapi.co/api/v2/pokemon?limit=30').toPromise();
    
    this.pokemons = request.results;
    console.log(this.pokemons);
        
  }

  getNames(){
    const request = this.httpClient.get<any>('https://pokeapi.co/api/v2/pokemon?limit=1010').toPromise();
    this.names = [];
    request.then((item) => {
      if(item.results){
        item.results.forEach((item:any) => {
          this.names.push(item.name);
        })
      }
    }).finally(() => console.log(this.names));
  }
}
 