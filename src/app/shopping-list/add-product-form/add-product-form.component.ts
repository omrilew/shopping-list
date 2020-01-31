import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { Product } from '../list-item/product';
import { resolve } from 'url';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.css']
})
export class AddProductFormComponent implements OnInit {


  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    const product = new Product(form.value.productName, form.value.productType);
    this.activeModal.close(product);
  }

}
