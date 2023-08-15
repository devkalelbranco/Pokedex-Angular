import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiPokemonService } from 'src/app/service/api-pokemon.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{

  constructor(
    public pokemonservice:ApiPokemonService,
    public activedRoute:ActivatedRoute){

    }    

    params:any;
    name:string = '';
    moves:any = {};

    ngOnInit(): void {
        this.activedRoute.params.subscribe(params => {
          this.params = params;
        })
        this.initializePage()
    }

    initializePage(){
      console.log(this.params)
      this.pokemonservice.getPokemon(this.params.name).then(result => {
        console.log(result, 'kalel result');
        this.name = result.name;
        this.moves = result.moves;

        console.log(this.name),
        console.log(this.moves)
      })
      /*
        http request
        preeche variaveis
      */
    }
}
