import { Injectable, Component, Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AddProductFormComponent } from '../shopping-list/add-product-form/add-product-form.component';
import { Product } from '../shopping-list/list-item/product';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private modalService: NgbModal) { }

  open(componentToOpen): Promise<any> {
    const modalRef = this.modalService.open(componentToOpen);
    return modalRef.result.then((results) => {
      console.log(results);
      if (results) {
        return Promise.resolve(results);
      }
    });
  }
}
