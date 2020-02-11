import { ShoppingList } from './../../shopping-list/list';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-list-form',
  templateUrl: './add-list-form.component.html',
  styleUrls: ['./add-list-form.component.css']
})
export class AddListFormComponent implements OnInit {
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit() {}
  onSubmit(form: NgForm): void {
    const list = new ShoppingList(form.value.listName);
    this.activeModal.close(list);
  }
}
