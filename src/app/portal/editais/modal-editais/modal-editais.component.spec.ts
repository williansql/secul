import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditaisComponent } from './modal-editais.component';

describe('ModalEditaisComponent', () => {
    let component: ModalEditaisComponent;
    let fixture: ComponentFixture<ModalEditaisComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ModalEditaisComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ModalEditaisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
