import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardGalleryComponent } from './card-gallery.component';

describe('CardEventosComponent', () => {
    let component: CardGalleryComponent;
    let fixture: ComponentFixture<CardGalleryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [CardGalleryComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(CardGalleryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
