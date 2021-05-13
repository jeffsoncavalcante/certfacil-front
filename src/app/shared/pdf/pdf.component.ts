import { MyeventsService } from './../../pages/myevents/myevents.service';
import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent {
  constructor(private service: MyeventsService) {}
  @ViewChild('content', { static: false }) el!: ElementRef;

  OnInit(): void {
    this.service.emiterpdf.subscribe((data) => console.log('oi'));
    console.log('chegou');
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('certificado.pdf');
        window.location.href = '/myevents';
      },
    });
  }
}
