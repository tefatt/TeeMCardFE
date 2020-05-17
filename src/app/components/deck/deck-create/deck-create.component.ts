import {Component, OnInit} from '@angular/core';
import {CardComponent} from '../../card/card/card.component';
// import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
// import {ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Card} from '../../../models/Card';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent implements OnInit {
  constructor() {
  }

  deck: Card[];

  searchValue = 'Enter name here';
  myControl = new FormControl();
  options: { name: string }[] = [
    {name: 'verb'},
    {name: 'noun'},
    {name: 'adjective'},
    {name: 'adverb'}
  ];
  filteredOptions: Observable<{}[]>;

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

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  displayFn(user: { name: string }): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): {}[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

}
