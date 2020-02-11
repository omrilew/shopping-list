import { ShoppingList } from './../shopping-list/list';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentListService {
  public _activeList: ShoppingList;

  public get activeList(): ShoppingList {
    return this._activeList;
  }
  public set activeList(value: ShoppingList) {
    this._activeList = value;
  }
  constructor() {}
}
