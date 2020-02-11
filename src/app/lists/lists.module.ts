import { ListsRoutingModule } from './lists-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { AppCommonModule } from '../app-common/app-common.module';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatCardModule } from '@angular/material/card';
import { ListsComponent } from './lists/lists.component';
import { AddListFormComponent } from './lists/add-list-form/add-list-form.component';

@NgModule({
  declarations: [ShoppingListComponent, ListsComponent],
  imports: [
    AppCommonModule,
    CommonModule,
    ListsRoutingModule,
    FormsModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    DragDropModule,
    MatCardModule
  ]
})
export class ListsModule {}
