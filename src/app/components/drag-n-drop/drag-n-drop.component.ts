import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem, CdkDrag, CdkDropList} from '@angular/cdk/drag-drop';

/**
 * @title Drag&Drop connected sorting
 */
@Component({
  selector: 'app-drag-n-drop',
  templateUrl: './drag-n-drop.component.html',
  styleUrls: ['./drag-n-drop.component.css']
})
export class DragNDropComponent {

  compareOperators = [
    '=',
    '<',
    '<=',
    '>',
    '>='
  ];

  logicOperators = [
    'and',
    'or',
  ];

  finalFilterExpresion = [
  ];

  drop(event: CdkDragDrop<string[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else if (event.previousContainer.id === "finalFilterExpresionList"){
      transferArrayItem(event.previousContainer.data,
        [],
        event.previousIndex,
        event.currentIndex);
    } else {
      copyArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  noOriginMixPredicate(dragItem: CdkDrag, dropList: CdkDropList) {
    return dropList.data.includes(dragItem.element.nativeElement.innerText);
  }
}
