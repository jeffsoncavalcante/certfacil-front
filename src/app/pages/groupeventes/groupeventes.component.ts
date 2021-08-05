import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { AngularFireStorage,AngularFireUploadTask, AngularFireStorageReference} from '@angular/fire/storage'
import { finalize } from 'rxjs/operators'
import { Observable } from 'rxjs';
import {GroupeventesService} from './groupeventes.service'

@Component({
  selector: 'app-groupeventes',
  templateUrl: './groupeventes.component.html',
  styleUrls: ['./groupeventes.component.css']
})
export class GroupeventesComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private alertservice: AlertModalService,
    private storage:AngularFireStorage,
    private service: GroupeventesService
    ) { }
    form: FormGroup;
    uploadPercentage: Observable<number>
    downloadURL
    pdf
    grupo
    id_grupo
    filtergrupo
  ngOnInit(): void {
    this.list()
  }
  list(){
    this.service.listgrupo().subscribe(
      (data) => {
      },
      async (error) => {
        if (error.status === 401) {
          await this.alertservice.showAlertDanger('Seção Expirou');
          window.localStorage.clear()
          window.location.href = '/login';
        }
      }
    );
    this.form = this.fb.group({
      descricao: [null, Validators.required],
      titulo: [null, Validators.required],
      cidade: [null, Validators.required],
      cor_texto: [null, Validators.required],
      cor_titulo: [null, Validators.required],
      cor_nome: [null, Validators.required],
      url_pdf: window.localStorage.getItem('url_pdf')
    });
  }
  upload(event){
    const file = event.target.files[0]
    const path = event.target.files[0].name
    const task = this.storage.upload(path, file);
    const ref = this.storage.ref(path);
    document.getElementById("uploadlabel").innerHTML = path
    this.uploadPercentage = task.percentageChanges()
    task.snapshotChanges().pipe(
    finalize(() => {
      this.downloadURL = ref.getDownloadURL()
      this.downloadURL.subscribe(url => (this.pdf = url,
        window.localStorage.setItem("url_pdf", this.pdf),
        console.log(this.pdf),
        this.list()
        ));
   })
  )
.subscribe();
  }
  onSubmit(){}

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
