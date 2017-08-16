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
  clickButton : boolean;
  constructor(private newsService:NewsService,private filterService:FilterService) { }
  
  Search(name:string) {
    this.clickButton = true;
    this.filterService.Search(name);
  }
  ClearSearch(){
    this.searchWord = undefined
    if (this.clickButton){
      this.filterService.clearSearch()
      this.clickButton = false;
    }
  }
}
