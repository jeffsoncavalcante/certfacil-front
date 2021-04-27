import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: RegisterService) { }

  ngOnInit(): void {
     this.form = this.fb.group({
    email:[null],
    password: [null],
    confirm: [null], 
    nome:[null],
    apelido: [null],
    tipo_usuario:[null],
    document: [null],
    campus: [null],
    celular: [null]
    })
  }
  register(){
   if(this.form.valid){
     // console.log('submit')
      console.log(this.form.value)
      
      this.service.create(this.form.value).subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    }
  }

}
