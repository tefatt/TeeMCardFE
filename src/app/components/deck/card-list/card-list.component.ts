import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {Card} from 'src/app/models/Card';
import {NgbCarousel, NgbSlideEvent, NgbSlideEventSource} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  constructor() {
  }

  @Input() visibleCardsIndex: number;
  cards: Card[];

  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;

  @ViewChild('carousel', {static: true}) carousel: NgbCarousel;

  ngOnInit(): void {
    this.cards = [
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
        original: 'ruzgar',
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

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }

}

