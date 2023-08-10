import { Component, Input } from '@angular/core';
import { Pokemon } from '../../models/pokemon';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input()
  pokemon: Pokemon | undefined;
  @Input()
  number!: number;

  name:string | undefined = '';

  ngOnInit(){
    this.name = this.pokemon?.name;
  }

  getImagePokemon(){
    const numberFormat = this.leadingZero(this.number);
    return `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${numberFormat}.png`
  }
  leadingZero(str:string|number, size =3):string{
    let n = String(str);
    while(n.length < (size || 2)){
      n = '0' + n;
    }
    return n;
  }
}
