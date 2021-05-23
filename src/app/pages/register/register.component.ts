import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  hide = true;
  hide2 = true;
  err: any=[]
  sucess: any=[]
  constructor(private fb: FormBuilder,
    private service: RegisterService,
    private alertservice: AlertModalService
    ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
    email:[null,[Validators.email,Validators.required]],
    password: [null, Validators.required, Validators.minLength(6)],
    confirm: [null, Validators.required, Validators.minLength(6)],
    nome:[null, [Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(10)]],
    apelido: [null,[Validators.required, Validators.pattern('^[a-zA-Z]+$'), Validators.minLength(3)]],
    tipo_usuario:[null, Validators.required],
    documento: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/)]],
    campus: [null, [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    celular: [null, [Validators.required, Validators.pattern(/^-?(0|[1-9]\d*)?$/), Validators.minLength(10)]],
    semestre: [null, [Validators.required,Validators.pattern(/^-?(0|[1-9]\d*)?$/)] ]
    })
  }
  private delay(ms: number): Promise<boolean> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }
  onSubmit(){
 if(this.form.valid){
      this.service.create(this.form.value).subscribe(
        async  data => {
          this.sucess = data
          if(this.sucess.message === "CREATED"){
           await this.alertservice.showAlertSuccess('Cadastro efetuado com Sucesso'),
           this.delay(4000)
            window.location.href='/login'
          }else{
            await this.alertservice.showAlertDanger('Falha ao realizar o Cadastro!')
          }

        },
        error => {
          this.err = error
          this.alertservice.showAlertDanger('Falha ao realizar o Cadastro! Status: '+this.err.status)
        }
      )
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
