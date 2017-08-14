import { Component, OnInit } from '@angular/core';
import { NewsService } from '../..//Service/news.service';


@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private newsService:NewsService) { }
  searchWord: string;
  Search() {
    
  }
}
