import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroEditaisComponent } from './cadastro-editais.component';

describe('FormCadEditaisComponent', () => {
  let component: CadastroEditaisComponent;
  let fixture: ComponentFixture<CadastroEditaisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroEditaisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroEditaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
