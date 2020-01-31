import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modalService/modal.service';
import { Product } from './product';
import { AddProductFormComponent } from './add-product-form/add-product-form.component';
import * as _ from 'lodash';
import { CdkDragDrop, moveItemInArray, CdkDragEnter, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  public listName: string;
  private products: { [type: string]: Product[] } = {};
  private typeList;
  private activeNumIndex: number;
  private lastNumIndex: number;

  constructor(private modalService: ModalService) {
    this.listName = 'List name';
    this.typeList = [];
    this.addDummyProducts();

  }

  public addProduct(item: Product): void {
    // if (!this.products.has(item.Type)) {
    //   this.products.set(item.Type, []);
    // }
    // this.products.get(item.Type).push(item);
    // this.types = _.map(this.products.keys, key => key);
    if (!this.products[item.Type]) {
      this.products[item.Type] = [];
      this.typeList.push(item.Type);
    }
    this.products[item.Type].push(item);
    console.log(this.products);
  }

  private addItemClicked() {
    this.modalService.open(AddProductFormComponent).then(product => {
      this.addProduct(product);
    });
  }

  private clearProductsClicked() {
    this.products = {};
    this.typeList = [];
  }
  // drop(event: CdkDragDrop<string[]>) {
  //   moveItemInArray(this.typeList, event.previousIndex, event.currentIndex);
  // }

  enter(i) {
    this.activeNumIndex = i;
  }
  exit(i) {
    this.lastNumIndex = i;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(this.typeList, event.previousIndex, this.activeNumIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }

  dropProduct(event: CdkDragDrop<string[]>, type: string) {
    moveItemInArray(this.products[type], event.previousIndex, event.currentIndex);
  }

  entered($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);

    transferArrayItem($event.item.dropContainer.data,
      $event.container.data,
      this.lastNumIndex,
      this.activeNumIndex);
  }
  entered2($event: CdkDragEnter) {
    console.log($event.item.data, $event.container.data);
    moveItemInArray(this.typeList, $event.item.data, $event.container.data);
  }

  private addDummyProducts() {
    this.addProduct(new Product('Chocolate', 'Candy'));
    this.addProduct(new Product('b', 'Candy'));
    this.addProduct(new Product('a', 'Candy'));
    this.addProduct(new Product('aa', 'Candy'));
    this.addProduct(new Product('bb', 'Candy'));
    this.addProduct(new Product('Chocolate', 'Candy'));
    this.addProduct(new Product('c', 'Candy'));
    this.addProduct(new Product('Chocolate', 'Candy'));
    this.addProduct(new Product('Chocolate', 'Meat'));
    this.addProduct(new Product('g', 'Meat'));
    this.addProduct(new Product('g', 'Clothing'));
    this.addProduct(new Product('Chocolate', 'Shoes'));
    this.addProduct(new Product('h', 'Electronics'));
    this.addProduct(new Product('Chocolate', 'Sports'));
  }
}
