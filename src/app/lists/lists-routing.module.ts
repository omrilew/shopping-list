import { ShoppingList } from './shopping-list/list';
import { ListsComponent } from './lists/lists.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';


const routes: Routes = [
    {
        path: '',
        component: ListsComponent
    },
    {
        path: 'shopping-list',
        component: ShoppingListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListsRoutingModule { }
