import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss']
})
export class FormularioCadastroComponent implements OnInit{

  form: FormGroup;
  // const newLink = this.form.controls.somenteTestando as FormArray;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      visible: true,
      somenteTestando: this.fb.array([]),
    })
  }

  ngOnInit(): void {

  }

  newForm() {
    const newLink = this.form.get('somenteTestando') as FormArray;
    newLink.push(this.fb.group({
      nomeLink: '',
      coleLink: '',
    }));
    console.log(this.newForm);
  }

}
