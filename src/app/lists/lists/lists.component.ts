import { Observable } from 'rxjs/internal/Observable';
import { FirebaseService } from './../../app-common/firebaseService/firebase-service.service';
import { AddListFormComponent } from './add-list-form/add-list-form.component';
import { ShoppingList } from './../shopping-list/list';
import { CurrentListService } from './../current-list-service/current-list.service';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { Component } from '@angular/core';
import { ModalService } from 'src/app/app-common/modalService/modal.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent {
  private _lists: Observable<ShoppingList[]>;

  constructor(
    private modalService: ModalService,
    private currentListService: CurrentListService,
    private firebaseService: FirebaseService
  ) {
    this.lists = firebaseService.getListsObserver();
    // this.lists.push(new ShoppingList());
  }

  private addNewListClicked(): void {
    this.modalService.open(AddListFormComponent).then((list: ShoppingList) => {
      // this.lists.push(list);
      this.firebaseService.addListToFirebase(list);
    });
  }

  private clearListsClicked(): void {}

  public get lists(): Observable<ShoppingList[]> {
    return this._lists;
  }
  public set lists(value: Observable<ShoppingList[]>) {
    this._lists = value;
  }
}
