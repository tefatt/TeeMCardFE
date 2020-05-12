import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../../../models/Card';
import {MatDialog} from '@angular/material/dialog';
import {WordDescriptionComponent} from './word-description/word-description.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  panelOpenState = true;
  flipped = false;

  name = 'TEST';
  animal = 'TEST';

  constructor(public dialog: MatDialog) {
  }


  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(WordDescriptionComponent, {
      width: '250px',
      data: {name: 'TEST NAME', animal: 'TEST ANIMAL'}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}
