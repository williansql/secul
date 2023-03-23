import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardEditaisComponent } from './card-editais.component';

describe('CardEditaisComponent', () => {
    let component: CardEditaisComponent;
    let fixture: ComponentFixture<CardEditaisComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardEditaisComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardEditaisComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
