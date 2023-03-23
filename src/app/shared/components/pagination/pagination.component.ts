import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Pagination } from './../../models/pagination';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  @Input() pagination!: Pagination;
  @Output() pageChange: EventEmitter<number> = new EventEmitter();
  pages!: Array<number>;
  paginationCollapse: boolean = false;

  ngOnInit(): void {
    this.pages = Array(this.pagination.numberOfPages);
    if (this.pagination.numberOfPages > 5) {
      this.paginationCollapse = true;
    }
  }

  emitPage(page: number) {
    this.pageChange.emit(page);  
    console.log(page);
      
  }
}
