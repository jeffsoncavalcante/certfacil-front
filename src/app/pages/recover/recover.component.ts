import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RecoverService } from './recover.service';


@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.css']
})
export class RecoverComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: RecoverService,private alertservice: AlertModalService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      email: [null]
    })
  }

  onSubmit(){
    if(this.form.valid){
      console.log('submit')

      this.service.recover(this.form.value).subscribe(
        data => this.alertservice.showAlertSuccess('Senha enviada para o E-mail'),
        error => this.alertservice.showAlertDanger('Falha ao Recuperar senha')
      )
    }

  }
}

