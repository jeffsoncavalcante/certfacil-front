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
  err: any=[]
  sucess: any=[]
  constructor(private fb: FormBuilder,
    private service: RegisterService,
    private alertservice: AlertModalService
    ) { }

  ngOnInit(): void {
    
    this.form = this.fb.group({
    email:[null,[Validators.email,Validators.required]],
    password: [null, Validators.required],
    confirm: [null, Validators.required],
    nome:[null, Validators.required],
    apelido: [null, Validators.required],
    tipo_usuario:[null, Validators.required],
    documento: [null, Validators.required],
    campus: [null, Validators.required],
    celular: [null, Validators.required],
    semestre: [null, Validators.required]
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
