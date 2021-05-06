import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirmpresenca',
  templateUrl: './confirmpresenca.component.html',
  styleUrls: ['./confirmpresenca.component.scss']
})
export class ConfirmpresencaComponent implements OnInit {

  constructor(public bsModalRef: BsModalRef) { }


  ngOnInit() {
  }

  onClose() {
    this.confirmAndClose(false);
  }

  private confirmAndClose(value: boolean) {
    this.bsModalRef.hide();
  }
}
