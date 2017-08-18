import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { NewsService } from '../..//Service/news.service';
import { Response } from '@angular/http';
import { News } from '../../Models/newsModel'
import { AlertService } from '../../Service/status.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterService,CheckNewsService } from '../../Service/subjects.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
    moduleId: module.id,
    selector: 'newslist',
    templateUrl: './news-list.template.html',
    styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {

    currentUser: string;
    myUserName: string;
    title: string;
    text: string;
    paginationCountPage: number;
    currentPaginationPage: number;
    search: string;
    filter: string;
    subscription: Subscription;
    showNews: string = "Show More"

    newsList: News[] = [];
    constructor(private newsService: NewsService, private checkNewsService:CheckNewsService,private alertService: AlertService, private router: Router, private filterService: FilterService, private activateRoute: ActivatedRoute) {
        this.currentUser = activateRoute.snapshot.params['username'];
        this.myUserName = JSON.parse(localStorage.getItem('currentUser')).username
        this.subscription = this.checkNewsService.getNews().subscribe(data => {this.currentPaginationPage=this.paginationCountPage;this.getData()})
        this.subscription = this.filterService.getSearch().subscribe(data => {this.search = data;console.log(3,data);this.getData();})
    }
    ngOnInit() {
        this.getData();
    }
    getData() {
        this.newsList = [];
        console.log('1',this.search)
        this.newsService.getData(this.currentUser, this.currentPaginationPage,this.search,this.filter).subscribe(
            data => {
                this.currentPaginationPage = data.pageNumber;
                this.paginationCountPage = data.countPage;
                data.results.map(elem => {
                    console.log(elem)
                    this.newsList.push(elem)
                })
            },
            error => {
                this.alertService.error('You are not authorized!!!');
            }

        );
    }
    setFilter(filter:string) {
        this.filter = filter;
        this.currentPaginationPage = undefined;
        this.getData()
    }
    setPage(page) {
        this.currentPaginationPage = page;
        this.getData()
    }
    showFullNews(news) {
        news.active = !news.active;
        if (news.active){
            this.showNews = 'Hide'
        }else{
            this.showNews = 'Show More';
        }
    }
    ClearFilter(){
        this.filter = undefined;
        this.getData();
        
    }
    delNewsClick(id: string): void {
        this.newsService.delNews(id).subscribe(
            data => {
                var index = this.newsList.findIndex(elem => elem.pk == id);
                this.newsList.splice(index, 1)
            },
            error => {
                if (error.status == "403") this.alertService.error('You are not owner this news!!!');
            }

        );
    }
    addNewsClick(news: any): void {
        this.title = '';
        this.text = '';
        this.newsService.createNews(news).subscribe(
            data => {
                this.newsList.push(data)
            },
            error => {
                if (error.status == "403") this.alertService.error('You are not owner this news!!!');
            }

        );
    }
    openDetailAuthor(author: string) {
        this.router.navigate([author]);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}