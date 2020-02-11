import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
