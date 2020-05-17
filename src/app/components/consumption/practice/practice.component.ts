import {Component, OnInit} from '@angular/core';
import {DeckPreview} from '../../../models/DeckPreview';
import {Card} from '../../../models/Card';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {
  constructor() {
  }

  deck: Card[];

  ngOnInit() {
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
