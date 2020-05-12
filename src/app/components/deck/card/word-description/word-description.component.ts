import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-word-description',
  templateUrl: './word-description.component.html',
  styleUrls: ['./word-description.component.css']
})
export class WordDescriptionComponent {

  constructor(
    public dialogRef: MatDialogRef<WordDescriptionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { name: string, animal: string }) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
