import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CredenciadosComponent } from './credenciados.component';

describe('CredenciadosComponent', () => {
    let component: CredenciadosComponent;
    let fixture: ComponentFixture<CredenciadosComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CredenciadosComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CredenciadosComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
