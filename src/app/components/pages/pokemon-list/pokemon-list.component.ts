import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiPokemonService } from 'src/app/service/api-pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {

  constructor(public pokemonservice:ApiPokemonService,
    public router:Router){}    

  onClickCard(){
    this.router.navigate(['details'])
  }
}