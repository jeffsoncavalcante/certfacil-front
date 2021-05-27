import { AlertModalService } from './../../shared/alert-modal.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  hide = true;
  hide2 = true;
  err: any = [];
  sucess: any = [];

  constructor(
    private fb: FormBuilder,
    private service: RegisterService,
    private alertservice: AlertModalService
  ) {}

  termo;

  ngOnInit(): void {
    this.termo = 0;
    this.form = this.fb.group({
      email: [null, [Validators.email, Validators.pattern(/^[a-z0-9.]+@[a-z0-9]+\.([a-z].+)?$/i)]],
      password: [null, [Validators.required, Validators.minLength(5)]],
      confirm: [null, [Validators.required, Validators.minLength(5)]],
      nome: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'),
          Validators.minLength(3),
        ],
      ],
      apelido: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'),
          Validators.minLength(3),
        ],
      ],
      tipo_usuario: [null, Validators.required],
      documento: [null, [Validators.required, Validators.pattern('^[0-9]+$')]],
      campus: [
        null,
        [
          Validators.required,
          Validators.pattern('^[a-zA-ZáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$'),
        ],
      ],
      celular: [
        null,
        [
          Validators.required,
          Validators.pattern('^[0-9]+$'),
          Validators.minLength(11),
        ],
      ],
      semestre: [null, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.maxLength(2)]],
    });
  }
  private delay(ms: number): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, ms);
    });
  }

  validtermo() {
    if (this.termo === 0) {
      this.termo = 1;
    } else {
      this.termo = 0;
    }
  }

  onSubmit() {
    if (this.form.valid) {
      if (this.termo === 1) {
        this.service.create(this.form.value).subscribe(
          async (data) => {
            this.sucess = data;
            if (this.sucess.message === 'CREATED') {
              await this.alertservice.showAlertSuccess(
                'Cadastro efetuado com Sucesso'
              ),
                this.delay(4000);
              window.location.href = '/login';
            } else {
              await this.alertservice.showAlertDanger(
                'Falha ao realizar o Cadastro!' + this.sucess.message
              );
            }
          },
          (error) => {
            this.err = error.error;
            this.alertservice.showAlertDanger(this.err.message);
          }
        );
      } else {
        this.alertservice.showAlertDanger('Termo não aceito!');
      }
    } else {
      this.alertservice.showAlertDanger('Falha ao realizar o Cadastro!');
    }
  }

  verificaValidTouched(campo) {
    return !this.form.get(campo).valid && this.form.get(campo).touched;
    return !campo.valid && campo.touched;
  }
  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo),
    };
  }
}
