import { Component, OnInit } from '@angular/core';
import {PokeApiService} from "../../service/poke-api.service";

@Component({
  selector: 'app-poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  public allPokemons: any;
  public filteredPokemons: any;

  constructor(
    private pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.filteredPokemons = this.allPokemons = res.results;
      }
    )
  }

  public getSearch(value: string): void {
    this.filteredPokemons = this.allPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    });
  }
}
