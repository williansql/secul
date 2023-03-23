import { ProfessionalsCategoriesComponent } from './professionals-categories.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CategoriesComponent', () => {
  let component: ProfessionalsCategoriesComponent;
  let fixture: ComponentFixture<ProfessionalsCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalsCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfessionalsCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
