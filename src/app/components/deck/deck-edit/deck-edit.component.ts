import {Component, OnInit} from '@angular/core';
import {Card} from '../../../models/Card';

@Component({
  selector: 'app-deck-edit',
  templateUrl: './deck-edit.component.html',
  styleUrls: ['./deck-edit.component.css']
})
export class DeckEditComponent implements OnInit {
  deck: Card[];

  constructor() {
  }

  ngOnInit(): void {
    this.deck = [
      {
        original: 'lopta',
        translation: 'top',
        example: 'Ball is round.'
      },
      {
        original: 'mačka',
        translation: 'kedi',
        example: 'Cat is an animal.'
      },
      {
        original: 'rüzgar',
        translation: 'vjetar',
        example: 'Wind is blowing.'
      },
      {
        original: 'kalem',
        translation: 'olovka',
        example: 'Pencil is an object.'
      }, {
        original: 'auto',
        translation: 'araba',
        example: 'Car is moving.'
      },
      {
        original: 'miš',
        translation: 'fare',
        example: 'Mouse is an animal.'
      },
      {
        original: 'pamuk',
        translation: 'pamuk',
        example: 'Cotton is a fabric.'
      }
    ];
  }

}
