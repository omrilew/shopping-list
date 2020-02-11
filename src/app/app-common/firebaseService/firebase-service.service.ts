import { Observable } from 'rxjs/internal/Observable';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ShoppingList } from 'src/app/lists/shopping-list/list';
import { AngularFirestoreCollection } from '@angular/fire/firestore/collection/collection';

class FirebaseShoppingList {
  private _id: string;
  private _shoppingList: ShoppingList;

  constructor(id: string, list: ShoppingList) {
    this._id = id;
    this._shoppingList = list;
  }

  get id(): string {
    return this._id;
  }

  get shoppingList(): ShoppingList {
    return this._shoppingList;
  }
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  private listsCollection: AngularFirestoreCollection<ShoppingList>;

  constructor(private firestore: AngularFirestore) {
    this.listsCollection = firestore.collection<ShoppingList>('lists');
  }

  public getListsObserver(): Observable<ShoppingList[]> {
    return this.listsCollection.valueChanges();
  }

  public addListToFirebase(list: ShoppingList) {
    const firebaseList = new FirebaseShoppingList(
      this.firestore.createId(),
      list
    );
    this.listsCollection.doc(firebaseList.id).set(firebaseList);
  }
}
