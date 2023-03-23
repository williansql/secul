import { CommonModule } from '@angular/common';
import { Component, HostListener, Input, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { FreeMode, Keyboard, Navigation, Thumbs, Zoom } from 'swiper';
import { SwiperModule } from 'swiper/angular';

import { NgxModalService } from '../ngx-modal/ngx-modal.service';

SwiperCore.use([FreeMode, Navigation, Thumbs, Zoom, Keyboard]);

@Component({
    standalone: true,
    imports: [CommonModule, SwiperModule],
    selector: 'app-swiper',
    templateUrl: './swiper.component.html',
    styleUrls: ['./swiper.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class SwiperComponent implements OnInit {
    @HostListener('window:keydown.esc')
    handleKeyDown() {
        this.closeSwipe();
    }
    @Input() imgs: string[] = [];
    thumbsSwiper: any;

    constructor(private modalService: NgxModalService) {}

    ngOnInit(): void {}

    closeSwipe() {
        this.modalService.close();
    }
}
