import { Component, DoCheck, OnInit, Input,Output, OnChanges, TemplateRef, EventEmitter,ViewChild } from '@angular/core';



@Component({
    moduleId: module.id,
    selector: 'pagination',
    styleUrls: ['./pagination.component.css'],
    templateUrl: './pagination.component.html',

})
export class Pagination implements OnChanges {
    @Input() paginationCountPage: number;
    @Input() currentPaginationPage: number;
    @Output() changePaginationPage = new EventEmitter<number>();
    pagination: any = [];
    ngOnChanges() {
        console.log('paginationCountPage', this.paginationCountPage)
        console.log('currentPaginationPage', this.currentPaginationPage)
        for (var i = 1; i < this.paginationCountPage; i++) {
            this.pagination.push(i)
        }

    }
    onPageChange(page:number) {

        this.currentPaginationPage = page;
        this.changePaginationPage.emit(page);
        console.log('dsaf',this.currentPaginationPage)
    }
}