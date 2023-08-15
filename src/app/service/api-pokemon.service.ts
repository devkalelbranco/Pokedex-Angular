import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  pokemons: any = [];
  types = [];
  names:Array<string> = [];
  

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

  getTypesNames(){
    const request = this.httpClient.get<any>('https://pokeapi.co/api/v2/type').toPromise();
      this.types = [];      
      request.then((item) => {
        if(item.results){
          item.results.forEach((item:any) => {
            this.types.push(item.name);
          })
        }
      }).finally(() => console.log(this.types));
  }

  getPokemon(name:string):Promise<any>{
    const request = lastValueFrom(this.httpClient.get(`https://pokeapi.co/api/v2/pokemon/${name}`));
    return request;
  }


}
 