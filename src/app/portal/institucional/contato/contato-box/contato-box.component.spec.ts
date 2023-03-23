import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoBoxComponent } from './contato-box.component';

describe('ContatoBoxComponent', () => {
    let component: ContatoBoxComponent;
    let fixture: ComponentFixture<ContatoBoxComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ContatoBoxComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(ContatoBoxComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
