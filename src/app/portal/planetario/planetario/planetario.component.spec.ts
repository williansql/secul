import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetarioComponent } from './planetario.component';

describe('PlanetarioComponent', () => {
  let component: PlanetarioComponent;
  let fixture: ComponentFixture<PlanetarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanetarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanetarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
