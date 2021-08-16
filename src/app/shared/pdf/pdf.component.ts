import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { AlertModalService } from '../alert-modal.service';
import { PdfService } from './pdf.service';
import { modelospdf } from '../listmodelo/listmodelo.modelo';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent{
  constructor(private service: PdfService, private alert: AlertModalService) {}
  premissa = true;
  nome = window.localStorage.getItem('nome');
  descricao = window.localStorage.getItem('descricao');
  carga_horaria = window.localStorage.getItem('carga_horaria');
  data = window.localStorage.getItem('data_inicio');
  img = window.localStorage.getItem('url_back');
  url_back = window.localStorage.getItem('url_back')+'.png'
  descricacao_layout = window.localStorage.getItem('descricao_layout')
  titulo = window.localStorage.getItem('titulo')
  cidade_layout = window.localStorage.getItem('cidade_layout')
  cor_nome = window.localStorage.getItem('cor_nome')
  cor_titulo = window.localStorage.getItem('cor_titulo')
  cor_texto = window.localStorage.getItem('cor_texto')
  

  @ViewChild('content', { static: true }) el!: ElementRef<HTMLImageElement>;

  async ppdf() {
    await this.premissa;

    html2canvas(this.el.nativeElement,{
      logging: true,
      useCORS: true,
      allowTaint: true,
      proxy: 'https://firebasestorage.googleapis.com'
      
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF({ orientation: 'l' });
      const pdfw = pdf.internal.pageSize.getWidth();
      const pdfh = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, 'PNG', 0, 0, pdfw, pdfh);
      pdf.save('certificado.pdf');
      window.location.href='/myevents'
    });
  }
  
  ngOnInit() {
    
    this.ppdf();
    
  }
}
