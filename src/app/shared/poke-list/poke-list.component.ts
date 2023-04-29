import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss'],
})
export class PokeListComponent implements OnInit {
  private setAllPokemons: any;
  public getAllPokemons: any;

  public apiError: boolean = false;
  public isLoading: boolean = false;

  constructor(private pokiApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokiApiService.apiListAllPokemons.subscribe({
      next: (res) => {
        this.isLoading = true;
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      },
      error: (error) => {
        this.apiError = true;
      }
    });
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLowerCase())
    });
    this.getAllPokemons = filter;
  }
}
