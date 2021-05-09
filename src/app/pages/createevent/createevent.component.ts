import { CreateeventService } from './createevent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css'],
})
export class CreateeventComponent implements OnInit {
  constructor(
    private service: CreateeventService,
    private fb: FormBuilder,
    private alertservice: AlertModalService
  ) {}
  form: FormGroup;
  files: Set<File>;

  ngOnInit(): void {
    this.form = this.fb.group({
      descricao: [null],
      nota: [null],
      data_inicio: [null],
      inicio: [null],
      id_usuario: [null],
      ativo: '0',
      carga_horaria: [null],
      img: '123',
    });
  }

  onSubmit() {
    this.service.createevent(this.form.value, '/api/eventos/store').subscribe(
      (dados) => {
        this.alertservice.showAlertSuccess('Evento Cadastrado com Sucesso');
      },
      (error) => {
        this.alertservice.showAlertDanger('Erro ao Cadastrar o Evento');
      }
    );
  }

  onChange(event) {
    console.log(event);
    this.files = new Set();
    const SelectFiles = <FileList>event.srcElement.files;
    document.getElementById('upload').innerHTML = SelectFiles[0].name;
    this.files.add(SelectFiles[0]);
  }


  search($event){
    let q= $event.target.value;

  }
}
