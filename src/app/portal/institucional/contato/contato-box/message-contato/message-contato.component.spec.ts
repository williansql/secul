import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageContatoComponent } from './message-contato.component';

describe('MessageContatoComponent', () => {
    let component: MessageContatoComponent;
    let fixture: ComponentFixture<MessageContatoComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MessageContatoComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(MessageContatoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
