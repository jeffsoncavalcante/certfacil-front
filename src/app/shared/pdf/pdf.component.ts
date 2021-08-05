import { Component, ElementRef, ViewChild } from '@angular/core';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css'],
})
export class PdfComponent {
  premissa = true;
  nome = window.localStorage.getItem('nome');
  descricao = window.localStorage.getItem('descricao');
  carga_horaria = window.localStorage.getItem('carga_horaria');
  data = window.localStorage.getItem('data_inicio');
  url_back = '../../../assets/images/bg-pdf.png'
  descricacao_layout = 'participou do 3º ciclo de oficinas do curso de sistemas de informação'
  titulo = 'III ciclo de oficinas'
  cidade_layout = 'Riachão do jacuipe'
  cor_nome = '#d3ff4e'
  cor_titulo = '#d3ff4e'
  cor_texto = 'write'

  @ViewChild('content', { static: true }) el!: ElementRef<HTMLImageElement>;

  async ppdf() {
    await this.premissa;

    html2canvas(this.el.nativeElement).then((canvas) => {
      const imgData = canvas.toDataURL('image/jpeg');
      const pdf = new jsPDF({ orientation: 'l' });
      const imgeProps = pdf.getImageProperties(imgData);
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
