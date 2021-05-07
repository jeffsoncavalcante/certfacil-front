import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from "jspdf";


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PdfComponent  {

  @ViewChild('content', {static:false}) el!: ElementRef;

 makePDF(){

  let  pdf= new jsPDF ( 'p', 'pt', 'a4');
  pdf.html(this.el.nativeElement,{
    callback: (pdf)=>{
      pdf.save("certificado.pdf");
    }
  });
 

 }

}
