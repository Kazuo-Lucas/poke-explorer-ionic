import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from '../services/pokeapi.service';
import { CommonModule } from '@angular/common';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonImg,
  IonList,
  IonItem,
  IonLabel,
  IonBackButton, 
  IonButtons 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-details',
  templateUrl: './detailsionic.page.html',
  styleUrls: ['./detailsionic.page.scss'],
  standalone: true,
  imports: [IonButtons, IonBackButton, 
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonImg,
    IonList,
    IonItem,
    IonLabel,
    IonButtons,
    IonBackButton
  ],
})
export class DetailsPage implements OnInit {
  pokemonName: string = '';
  pokemonDetails: any = null;

  constructor(
    private route: ActivatedRoute,
    private pokeApi: PokeapiService
  ) {}

  ngOnInit() {
    this.pokemonName = this.route.snapshot.paramMap.get('name') || '';
    if (this.pokemonName) {
      this.pokeApi.getPokemonDetails(this.pokemonName).subscribe(data => {
        this.pokemonDetails = data;
      });
    }
  }
}
