
import { users } from './../../shared/listusers/listusers.model';
import { CreateeventService } from './createevent.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AngularFireStorage,AngularFireUploadTask, AngularFireStorageReference} from '@angular/fire/storage'
import { finalize } from 'rxjs/operators'
@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css'],
})
export class CreateeventComponent implements OnInit {
  ref : AngularFireStorageReference
  task: AngularFireUploadTask
  constructor(
    private service: CreateeventService,
    private fb: FormBuilder,
    private alertservice: AlertModalService,
    private storage:AngularFireStorage
  ) {
  }




  form: FormGroup;
  path: String
  user: users[];
  id_palestrante
  image
  downloadURL
  ngOnInit():void{

    this.list()
  }
  upload(event){
    const file = event.target.files[0]
    const path = event.target.files[0].name
    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);
    console.log('Image uploaded!');
    task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = ref.getDownloadURL()
      this.downloadURL.subscribe(url => (this.image = url,
        window.localStorage.setItem("url_img", this.image)
        ));
   })
  )
.subscribe();

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
      img: window.localStorage.getItem('url_img'),
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




}
