import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelRevisaoComponent } from './painel-revisao.component';

describe('PainelRevisaoComponent', () => {
  let component: PainelRevisaoComponent;
  let fixture: ComponentFixture<PainelRevisaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelRevisaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelRevisaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
