import { CommonModule } from '@angular/common';
import {
    Component,
    ComponentRef,
    ElementRef,
    EventEmitter,
    OnDestroy,
    OnInit,
    Type,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';
import { NoticeService } from 'src/app/shared/services/notice.service';

import { NgxModalService } from './ngx-modal.service';

interface Options {
    ignoreBackClick?: boolean;
}
@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'ngx-modal',
    templateUrl: './ngx-modal.component.html',
    styleUrls: ['./ngx-modal.component.sass'],
})
export class NgxModalComponent<T> implements OnInit, OnDestroy {
    childComponentRef!: ComponentRef<T>;
    closed: boolean = false;

    onClose: EventEmitter<T> = new EventEmitter();
    onInit: EventEmitter<T> = new EventEmitter();

    @ViewChild('container', { read: ViewContainerRef })
    entry?: ViewContainerRef;
    private element: any;
    constructor(
        private noticeService: NoticeService,
        public modalService: NgxModalService,
        el: ElementRef
    ) {
        this.element = el.nativeElement;
    }

    ngOnInit(): void {
        (document.activeElement as any).blur();
    }

    open<T>(component: Type<T>, data?: Partial<T>, options?: Options): void {
        this.element.style.display = 'block';

        this.entry?.clear();

        this.childComponentRef = this.entry?.createComponent(component) as any;

        Object.keys(data || {}).forEach((key) => {
            const anyData = data as any;
            if (anyData === undefined) return;
            if (anyData[key] === undefined) return;
            const intanceRef = this.childComponentRef.instance as any;
            intanceRef[key] = anyData[key];
        });

        if (!options?.ignoreBackClick) {
            this.element.addEventListener('click', (el: any) => {
                if (el.target.className === 'modal-background') {
                    this.modalService.close();
                }
            });
        }

        this.onInit.emit(this.childComponentRef.instance);
    }

    close(): void {
        if (this.closed) return;
        this.closed = true;
        this.modalService.close(this.childComponentRef);
        this.closed = false;
        this.entry?.clear();
        this.element.style.display = 'none';
        this.emitCloseEvent();
    }

    ngOnDestroy(): void {
        this.childComponentRef.destroy();
    }

    emitCloseEvent(): void {
        this.onClose.emit(this.childComponentRef.instance);
    }

    emitCLoseModal() {
        this.noticeService.checkModal.emit(false);
    }
}
