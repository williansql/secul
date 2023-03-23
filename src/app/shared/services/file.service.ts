import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { FileTreeInterface } from 'src/app/shared/models/filetree-interface';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root',
})
export class FileService {
    file?: any;
    fileAPI: string = environment.fileAPI;
    finishedLoading: EventEmitter<void> = new EventEmitter();
    

    constructor(private http: HttpClient) {}

    getFileBinary(noticeId: number, fileId: number) {
        this.http
            .get<FileTreeInterface[]>(this.fileAPI)
            .subscribe((fileTree) => {
                fileTree = fileTree.filter(
                    (files) => files.noticeId == noticeId
                );

                if (!fileTree[0])
                    return console.log(
                        'No files found for noticeId = ' + noticeId
                    );

                var file = fileTree[0].files[fileId];

                // Open .pdf in new tab or download it (mobile)
                // if (
                //     file.content[0] == 'J'
                //       && window.screen.width > 992
                // ) {
                    
                const link = document.createElement('a');
                link.href = file.mime + file.content;
                link.download = file.name;
                link.click();

                this.finishedLoading.emit();

                // var win = window.open('', '_blank');
                // var html = '';

                // html += '<html>';
                // html += '<body style="margin:0!important">';
                // html +=
                //   '<embed width="100%" height="100%" src="data:application/pdf;base64,' +
                //   file.content +
                //   '" type="application/pdf" />';
                // html += '</body>';
                // html += '</html>';

                // win!.document.write(html);

                // Download file
                // }
                // else {
                //     const link = document.createElement('a');
                //     link.href = file.mime + file.content;
                //     link.download = file.name;
                //     link.click();
                // }
            });
    }
}
