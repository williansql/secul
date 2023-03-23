import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardChamadasComponent } from './card-chamadas.component';

describe('CardChamadasComponent', () => {
    let component: CardChamadasComponent;
    let fixture: ComponentFixture<CardChamadasComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardChamadasComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardChamadasComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
