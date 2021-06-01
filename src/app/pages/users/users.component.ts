import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(
    private service: UsersService,
    private fb: FormBuilder,
    private alertservice: AlertModalService,) { }
    form: FormGroup;
    hide = true;
    hide2 = true;
  ngOnInit() {
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
      tipo_usuario: 'operador',
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
      semestre: '0',
    });
  }
  onSubmit() {
    this.service.create(this.form.value, '/api/user/store').subscribe(
      (dados) => {
        this.alertservice.showAlertSuccess('Usuario Cadastrado com Sucesso');
      },
      (error) => {
        this.alertservice.showAlertDanger('Erro ao Cadastrar o usuario');
        this.form.reset()
      }
    );
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
