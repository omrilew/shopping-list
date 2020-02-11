import { CurrentListService } from './../current-list-service/current-list.service';
import { ShoppingList } from './list';
import { Component } from '@angular/core';
import { ModalService } from '../../app-common/modalService/modal.service';
import { Product } from './product';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import * as _ from 'lodash';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  private activeNumIndex: number;

  private shoppingList: ShoppingList;

  constructor(
    private modalService: ModalService,
    private currentListService: CurrentListService
  ) {
    this.shoppingList = this.currentListService.activeList;
  }

  private addItemClicked() {
    this.modalService.open(AddProductFormComponent).then((product: Product) => {
      this.addProduct(product);
    });
  }
  addProduct(product: Product): void {
    this.shoppingList.addProduct(product);
  }

  private clearProductsClicked() {
    this.shoppingList.clearList();
  }

  enter(i) {
    this.activeNumIndex = i;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        this.shoppingList.typeList,
        event.previousIndex,
        this.activeNumIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dropProduct(event: CdkDragDrop<string[]>, type: string) {
    moveItemInArray(
      this.shoppingList.typeList[type],
      event.previousIndex,
      event.currentIndex
    );
  }
}
