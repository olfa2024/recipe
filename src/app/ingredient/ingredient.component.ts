import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.css']
})
export class IngredientComponent {

  @Input() 
  showVideo: boolean = false;
  recipe: any;

  constructor(
    public dialogRef: MatDialogRef<IngredientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.recipe = data.recipe;
  }

  openYoutubeVideo() {
    this.showVideo = false;
  }

  close(): void {
    this.dialogRef.close();
  }
}
