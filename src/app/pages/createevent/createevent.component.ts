
import { users } from './../../shared/listusers/listusers.model';
import { CreateeventService } from './createevent.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AngularFireStorage,AngularFireUploadTask, AngularFireStorageReference} from '@angular/fire/storage'
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';


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

  uploadPercentage: Observable<number>

  ngOnInit():void{
    this.list()
  }
  upload(event){
    const file = event.target.files[0]
    const path = event.target.files[0].name
    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);
    document.getElementById("uploadlabel").innerHTML = path
    this.uploadPercentage = task.percentageChanges()
    console.log('Image uploaded!');
    task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = ref.getDownloadURL()
      this.downloadURL.subscribe(url => (this.image = url,
        window.localStorage.setItem("url_img", this.image),
        this.list()
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
          window.localStorage.clear()
          window.location.href = '/login';
        }
      }
    );
      console.log(window.localStorage.getItem("url_img"))
      this.form = this.fb.group({
      descricao: [null, Validators.required],
      nota: [null, Validators.required],
      data_inicio: [null, Validators.required],
      inicio: [null, Validators.required],
      ativo: '0',
      carga_horaria: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
      img: window.localStorage.getItem("url_img"),
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
    if(this.form.valid){
    this.service.createevent(this.form.value, '/api/eventos/store').subscribe(
      (dados) => {
        this.alertservice.showAlertSuccess('Evento Cadastrado com Sucesso');
        window.localStorage.removeItem('url_img')
        this.form.reset()
      },
      (error) => {
        this.alertservice.showAlertDanger('Erro ao Cadastrar o Evento');
        window.localStorage.removeItem('url_img')
        this.form.reset()
      }
    );
  }else{
    this.alertservice.showAlertDanger('Falha ao realizar o Cadastro!')
   }
  }
  verificaValidTouched(campo){
    return !this.form.get(campo).valid && this.form.get(campo).touched
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo){
    return{
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }
}
