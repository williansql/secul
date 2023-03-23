import { Gallery } from '../../../shared/models/gallery-interface';
import { Component, Input, OnInit } from '@angular/core';
import { NgxModalService } from 'src/app/shared/components/ngx-modal/ngx-modal.service';
import { SwiperComponent } from 'src/app/shared/components/swiper/swiper.component';

@Component({
    selector: 'app-card-gallery',
    templateUrl: './card-gallery.component.html',
    styleUrls: ['./card-gallery.component.scss'],
})
export class CardGalleryComponent implements OnInit {
    @Input() info!: Gallery;

    constructor(private modalService: NgxModalService) {}

    ngOnInit(): void {}

    openGallery() {
        this.modalService
            .open(SwiperComponent, { imgs: this.info.images })
            .subscribe();
    }
}
