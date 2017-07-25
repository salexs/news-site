import { Component, OnInit } from '@angular/core';
import { NewsService } from './news.service';
import { Response } from '@angular/http';
import { News } from './News'
import { AlertService } from '../StatusAuth/status.service'

@Component({
    selector: 'my-app',
    template: `<div class='col-md-9 col-md-offset-1'>
                    <label>Create news:</label>
                    <input [(ngModel)]="title" placeholder="Title">
                    <input [(ngModel)]="text" placeholder="Text">
                    <input class="btn btn-default" type="submit" value="Add News" (click)="addNews(title, text)">
                    <div class="row">
                        <div class="col-sm-5 col-md-3" *ngFor="let news of newsList">
                            <div class="thumbnail">
                                <div class="caption">
                                    <i class="fa fa-trash-o" aria-hidden="true" (click)="delNews(news)"></i>
                                    <h3>{{news.title}}</h3>
                                    <p>{{news.text}}</p>
                                    <p><i>Author: {{news.author}}</i></p>
                                    <p><a href="#" class="btn btn-default" role="button">Show More</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 `
})
export class AppComponent implements OnInit {
    constructor(private newsService: NewsService,private alertService: AlertService) { }
    newsList: News[] = [];
    ngOnInit() {

        this.newsService.getData().subscribe(
            data => {
                data.map((elem: News) => {
                    this.newsList.push(elem)
                })
            },
            error => {
                if (error.status == "403") this.alertService.error('You are not authorized!!!');
            }

        );
    }
}