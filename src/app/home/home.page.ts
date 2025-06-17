import { Component, OnInit } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {   
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonList, 
  IonItem, 
  IonAvatar, 
  IonLabel 
} from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
  ]
})
export class HomePage implements OnInit {
  pokemons: any[] = [];

  constructor(private pokeApi: PokeapiService, private router: Router) {}

  ngOnInit() {
    this.pokeApi.getPokemons(20, 0).subscribe(response => {
      this.pokemons = response.results;
    });
  }

  openDetails(name: string) {
    this.router.navigate(['/detailsionic', name]);
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

}
