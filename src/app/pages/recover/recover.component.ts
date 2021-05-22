import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      email: [null,[Validators.email,Validators.required]]
    })
  }

  onSubmit(){
    if(this.form.valid){
      console.log('submit')

      this.service.recover(this.form.value).subscribe(
        data => {
          this.alertservice.showAlertSuccess('Senha enviada para o E-mail')

          window.location.href='/validpassword'
        },
        error => {
          this.alertservice.showAlertDanger('Falha ao Recuperar senha')
        console.log(error)

        }
      )
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

