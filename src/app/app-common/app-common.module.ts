import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AddListFormComponent } from './../lists/lists/add-list-form/add-list-form.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { environment } from '../../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddProductFormComponent } from '../lists/shopping-list/add-product-form/add-product-form.component';

@NgModule({
  declarations: [AddProductFormComponent, AddListFormComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  entryComponents: [AddProductFormComponent, AddListFormComponent]
})
export class AppCommonModule {}
