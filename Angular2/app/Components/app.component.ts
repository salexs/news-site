import { Component, DoCheck, OnInit, OnChanges } from '@angular/core';
import { NewsService } from '../Service/news.service';
import { Response } from '@angular/http';
import { News } from '../Models/newsModel'
import { AlertService } from '../Service/status.service'
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
    selector: 'my-app',
    template: `<div class='col-md-9 col-md-offset-1'>
                    <label>Create news:</label>
                    <input [(ngModel)]="title" placeholder="Title">
                    <input [(ngModel)]="text" placeholder="Text">
                    <input class="btn btn-default" type="submit" (click)="addNewsClick({title:title,text:text})" value="Add News" >
                    <div class="row">
                        <div class="col-sm-5 col-md-3" *ngFor="let news of newsList">
                            <div class="thumbnail">
                                <div class="caption">
                                    <i class="fa fa-trash-o" aria-hidden="true" (click)="delNewsClick(news.pk)"></i>
                                    <h3>{{news.title}}</h3>
                                    <p>{{news.text}}</p>
                                    <p (click)="openDetailAuthor(news.author)"><i>Author: {{news.author}}</i></p>
                                    <p><a href="#" class="btn btn-default" role="button">Show More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 `
})
export class AppComponent implements OnInit {
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
                    this.newsList.push(elem)
                })
            },
            error => {
                this.alertService.error('You are not authorized!!!');
            }

        );
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