import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalOrganogramaComponent } from './modal-organograma.component';

describe('ModalOrganogramaComponent', () => {
    let component: ModalOrganogramaComponent;
    let fixture: ComponentFixture<ModalOrganogramaComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalOrganogramaComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalOrganogramaComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
