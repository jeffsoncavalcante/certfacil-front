import { ValidaPasswordService } from './valida-password.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-valida-password',
  templateUrl: './valida-password.component.html',
  styleUrls: ['./valida-password.component.scss']
})
export class ValidaPasswordComponent implements OnInit {

  constructor( private fb: FormBuilder,
    private alertservice: AlertModalService,
    private service: ValidaPasswordService
    ) {}
  form: FormGroup
  dados: any=[]
  tokenrecover: any=[]
  ngOnInit() {
    this.form = this.fb.group({
      token: [null]
    })
  }

  valid(){
    this.service.create(this.form.value,"/api/user/validatetoken").subscribe(
      data =>{
        console.log(this.dados)
        if(this.dados.message === 'true'){

          this.tokenrecover = this.form.value
          console.log(this.tokenrecover)
          window.localStorage.setItem('tokenrecover',this.tokenrecover.token)
          window.location.href='/newpassword'
        }


      }
    )
  }

}
