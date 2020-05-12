import {Component, OnInit} from '@angular/core';
import {CardComponent} from '../card/card.component';
// import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';
// import {ViewChild} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-deck-create',
  templateUrl: './deck-create.component.html',
  styleUrls: ['./deck-create.component.css']
})
export class DeckCreateComponent implements OnInit {
  constructor() {
  }

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
