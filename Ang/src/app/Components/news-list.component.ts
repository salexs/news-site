import { Component, DoCheck, OnInit, OnChanges } from '@angular/core';
import { NewsService } from '../Service/news.service';
import { Response } from '@angular/http';
import { News } from '../Models/newsModel'
import { AlertService } from '../Service/status.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer} from '@angular/platform-browser'


@Component({
    moduleId: module.id,
    selector: 'newslist',
    templateUrl: './news-list.template.html',
    styleUrls: ['./news-list.component.css'],
})
export class NewsListComponent implements OnInit {
    constructor(private newsService: NewsService, private alertService: AlertService, private router: Router, private activateRoute: ActivatedRoute) {
        this.currentUser = activateRoute.snapshot.params['username'];
     }
    currentUser : string;
    title : string;
    text : string;
    newsList : News[] = [];
    ngOnInit() {
        this.newsService.getData(this.currentUser).subscribe(
            data => {
                data.map((elem: News) => {
                    elem.active = false;
                    this.newsList.push(elem)
                })
            },
            error => {
                this.alertService.error('You are not authorized!!!');
            }

        );
    }
    showFullNews(news) {
        news.active = !news.active;
    }
    delNewsClick(id: string): void {
        this.newsService.delNews(id).subscribe(
            data => {
                var index = this.newsList.findIndex(elem=> elem.pk==id);
                this.newsList.splice(index,1)
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
    openDetailAuthor(author:string) {
        this.router.navigate([author]);
    }
}