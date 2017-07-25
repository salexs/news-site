import { Component } from '@angular/core';
     

@Component({
    selector: 'my-app',
    template: `<label>Create news:</label>
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
                 `
})
export class AppComponent { 


}