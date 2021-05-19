import { users } from './../../shared/listusers/listusers.model';
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
  ) {


  }

  form: FormGroup;
  files: Set<File>;
  user: users[];
  id_palestrante
  CLIENT_ID = '461904533979-qotu2j484qrk4j1jl74pf3d69ab42a45.apps.googleusercontent.com'
  CLIENT_SECRET = 'MgRqUwyRQW2CTJJCyVc1mANq'
  REDIRECT_URI = 'https://developers.google.com/oauthplayground'
  REFRESH_TOKEN = '1//04CVN1kSsaYyPCgYIARAAGAQSNwF-L9IrTlGjLKpwIqfnKWnPZYixi-N-sm45Fd0fNjLB0Obgd_oRmP-fNVa_0Vo8FnhgNzn3WjA'
  drive
  filepath
  ngOnInit():void{

    this.list()
  }



  async uploadgoogle(){
    try {
      const response = await this.drive.file.create({
        requestBody:{
          name: 'teste.jpg',
          mimeType: 'image/jpg'
        },
        media:{
          mimeType: 'image/jpg',
         // body: fs.createReadStream(this.filepath)
        }
      });
      console.log(response.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  list(){
    this.service.listuser().subscribe(
      (data) => {
        this.user = data.users;
        console.log(this.user);
      },
      async (error) => {
        console.log(error.status);
        if (error.status === 401) {
          await this.alertservice.showAlertDanger('Seção Expirou');
          window.location.href = '/login';
        }
      }
    );

    this.form = this.fb.group({
      descricao: [null],
      nota: [null],
      data_inicio: [null],
      inicio: [null],
      ativo: '0',
      carga_horaria: [null],
      img: '123',
      id_usuario: this.id_palestrante,
    });
  }

  search($event) {
    let name = $event.target.value;
    let list = this.user.filter( x=> x.nome === name)[0];
    this.id_palestrante = list.id
    this.list()

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


}
