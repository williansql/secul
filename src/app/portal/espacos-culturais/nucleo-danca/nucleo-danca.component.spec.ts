import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NucleoDancaComponent } from './nucleo-danca.component';

describe('NucleoDancaComponent', () => {
    let component: NucleoDancaComponent;
    let fixture: ComponentFixture<NucleoDancaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [NucleoDancaComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(NucleoDancaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
