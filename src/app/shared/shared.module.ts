import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertModalComponent],
  exports: [AlertModalComponent],
  // entryComponents não é necessário a partir do angular v9
  entryComponents: [AlertModalComponent]
})
export class SharedModule { }
