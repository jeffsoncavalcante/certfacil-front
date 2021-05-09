import { ConfirmSenhaService } from './confirm-senha.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-confirm-senha',
  templateUrl: './confirm-senha.component.html',
  styleUrls: ['./confirm-senha.component.scss']
})
export class ConfirmSenhaComponent implements OnInit {

  constructor( private fb: FormBuilder,
    private alertservice: AlertModalService,
    private service: ConfirmSenhaService

    ) {}
  form: FormGroup

  ngOnInit() {
    this.form = this.fb.group({
      password: [null],
      confirm: [null]
    })
  }

  valid(){
    this.service.newpass(this.form.value,"/api/user/resetPassword").subscribe(
      data =>{
        console.log(data)
      })
      error =>{
        console.log(error)
      }
  }

}
