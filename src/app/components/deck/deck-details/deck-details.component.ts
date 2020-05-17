import {Component, OnInit} from '@angular/core';
import {DeckPreview} from '../../../models/DeckPreview';

@Component({
  selector: 'app-deck-details',
  templateUrl: './deck-details.component.html',
  styleUrls: ['./deck-details.component.css']
})
export class DeckDetailsComponent implements OnInit {
  selectedDecks = [];

  constructor() {
  }

  userDecks: DeckPreview[] = [
    {id: 1, name: 'The Dark Knight', size: 30},
    {id: 2, name: 'GoT s3 ep8', size: 37},
    {id: 3, name: 'Eminem - Slim Shady', size: 65, description: 'Only words longer than 6'},
    {id: 4, name: 'Dark s1 ep2', size: 25},
    {id: 5, name: 'Dark s1 ep3', size: 25},
    {id: 6, name: 'Dark s1 ep4', size: 25},
    {id: 7, name: 'Olly Murs - Moves', size: 44, description: 'Only verbs'},
    {id: 8, name: 'Django Unchained', size: 80, description: 'Only nouns and verbs'},
  ];

  ngOnInit(): void {

  }

  selectDeck(deckId: number) {
    if (this.selectedDecks.includes(deckId)) {
      this.selectedDecks = this.selectedDecks.filter(id => id !== deckId);
    } else {
      this.selectedDecks.push(deckId);
    }
    console.log(this.selectedDecks);
  }
}
