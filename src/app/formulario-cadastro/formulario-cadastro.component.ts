import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, FormBuilder, Validators, ValidationErrors, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-formulario-cadastro',
  templateUrl: './formulario-cadastro.component.html',
  styleUrls: ['./formulario-cadastro.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
  ]
})
export class CadastroEditaisComponent implements OnInit{

  form: FormGroup;
  // const newLink = this.form.controls.somenteTestando as FormArray;

  constructor(private fb: FormBuilder){
    this.form = this.fb.group({
      visible: true,
      links: this.fb.array([]),
    })
  }

  get links(): FormArray{
    return this.form.get('links') as FormArray;
  }

  ngOnInit(): void {

  }

  newForm() {
    let newLink = this.links;
    newLink.push(this.fb.group({
      nomeLink: '',
      coleLink: '',
    }));
    console.log(this.newForm);
  }

  deleteForm() {

  }

}
