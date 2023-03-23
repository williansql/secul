import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileService } from 'src/app/shared/services/file.service';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
    @Input() internalRoute?: string;
    @Input() externalRoute?: string;
    @Input() style?: string;
    @Input() disabled?: boolean;

    @Input() noticeInfo?: { id: number; fileId: number };

    constructor(private router: Router, private fileService: FileService) {}

    ngOnInit(): void {}

    redirect(): any {
        if (this.internalRoute)
            return this.router.navigate([this.internalRoute]);
        if (this.externalRoute)
            return window.open(this.externalRoute, '_blank');
        if (this.noticeInfo) {
            this.fileService.getFileBinary(
                this.noticeInfo.id,
                this.noticeInfo.fileId
            );
        }
    }
}
