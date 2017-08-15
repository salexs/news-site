import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../Service/news.service';
import { FilterService } from '../../Service/subjects.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchWord: string;
  constructor(private newsService:NewsService,private filterService:FilterService) { }
  
  Search(name:string) {
    this.filterService.Search(name);
  }
}
