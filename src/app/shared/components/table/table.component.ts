import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { InputSearchComponent } from '../input-search/input-search.component';
import { PaginationComponent } from '../pagination/pagination.component';
import { SelectComponent } from '../select/select.component';
import { Pagination } from '../../models/pagination';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, PaginationComponent, SelectComponent,InputSearchComponent],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TableComponent implements OnInit {

    @Input() pagination!: Pagination;
    @Output() paginationParams = new EventEmitter();
    @Output() criteriaParam = new EventEmitter();
    @Input() valueSearch: string = ''
    params = {
      page: 0,
      size: 5
    };
    sizes = [{ id:5 , name: 5 }, { id:10, name: 10 }, { id: 25,name: 25 }];
    constructor() {}
  
    ngOnInit(): void {
      this.params.size = this.pagination.size
    }
  
    emitPage(page: any) {
      this.params.page = page;
      this.emitParams();
    }
  
    emitSize(size: any) {
      this.params.size = size;
      this.emitParams();
    }
  
    emitParams() {
      this.paginationParams.emit(this.params);
    }
  
    emitSearch(term:any){
      this.criteriaParam.emit({...this.params, name: term})
    }

}
