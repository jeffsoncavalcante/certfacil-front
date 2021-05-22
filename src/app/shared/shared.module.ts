import { PdfComponent } from './pdf/pdf.component';
import { ConfirmpresencaComponent } from './confirm-presenca/confirmpresenca/confirmpresenca.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertModalComponent } from './alert-modal/alert-modal.component';


@NgModule({
  imports: [
    CommonModule
    
  ],
  declarations: [AlertModalComponent, ConfirmpresencaComponent],
  exports: [AlertModalComponent, ConfirmpresencaComponent],
  // entryComponents não é necessário a partir do angular v9
  entryComponents: [AlertModalComponent, ConfirmpresencaComponent]
})
export class SharedModule { }
