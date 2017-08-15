import { Component, OnInit, OnChanges, DoCheck } from '@angular/core';
import { NewsService } from '../..//Service/news.service';
import { Response } from '@angular/http';
import { News } from '../../Models/newsModel'
import { AlertService } from '../../Service/status.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { FilterService } from '../../Service/subjects.service';
import { Subscription } from 'rxjs/Subscription';



@Component({
    moduleId: module.id,
    selector: 'newslist',
    templateUrl: './news-list.template.html',
    styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {

    currentUser: string;
    title: string;
    text: string;
    paginationCountPage: number;
    currentPaginationPage: number;
    search: string;
    subscription: Subscription;

    newsList: News[] = [];
    constructor(private newsService: NewsService, private alertService: AlertService, private router: Router, private filterService: FilterService, private activateRoute: ActivatedRoute) {
        this.currentUser = activateRoute.snapshot.params['username'];
        this.subscription = this.filterService.getSearch().subscribe(data => {this.search = data;console.log(3,data);this.getData();})
    }
    ngOnInit() {
        this.newsList = [];
        console.log('1',this.search)

        this.newsService.getData(this.currentUser, this.currentPaginationPage, this.search).subscribe(
            data => {
                this.currentPaginationPage = data.pageNumber;
                this.paginationCountPage = data.countPage;
                data.results.map(elem => {
                    this.newsList.push(elem)
                })
            },
            error => {
                this.alertService.error('You are not authorized!!!');
            }

        );
    }
    getData() {
        this.newsList = [];
        console.log('1',this.search)

        this.newsService.getData(this.currentUser, this.currentPaginationPage,this.search).subscribe(
            data => {
                this.currentPaginationPage = data.pageNumber;
                this.paginationCountPage = data.countPage;
                data.results.map(elem => {
                    this.newsList.push(elem)
                })
            },
            error => {
                this.alertService.error('You are not authorized!!!');
            }

        );
    }

    setPage(page) {
        this.currentPaginationPage = page;
        this.getData()
    }

    showFullNews(news) {
        news.active = !news.active;
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