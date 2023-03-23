import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxFileComponent } from './box-file.component';

describe('BoxFileComponent', () => {
  let component: BoxFileComponent;
  let fixture: ComponentFixture<BoxFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoxFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoxFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
