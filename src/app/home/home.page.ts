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
  IonLabel, 
  IonButtons, 
  IonFooter, IonButton } from "@ionic/angular/standalone";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonButton, IonFooter, IonButtons, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel, 
    IonButtons, 
    IonFooter 
  ]
})
export class HomePage implements OnInit {
  pokemons: any[] = [];  
  offset = 0;
  limit = 20;

  constructor(private pokeApi: PokeapiService, private router: Router) {}

  ngOnInit() {
    this.loadPokemons();
  }

  loadPokemons() {
    this.pokeApi.getPokemons(this.limit, this.offset).subscribe(response => {
      this.pokemons = response.results;
    });
  }

  nextPage() {
    this.offset += this.limit;
    this.loadPokemons();
  }

  previousPage() {
    if (this.offset >= this.limit) {
      this.offset -= this.limit;
      this.loadPokemons();
    }
  }

  openDetails(name: string) {
    this.router.navigate(['/detailsionic', name]);
  }

  getPokemonId(url: string): string {
    const parts = url.split('/');
    return parts[parts.length - 2];
  }

}
