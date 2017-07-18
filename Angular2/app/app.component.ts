import { Component } from '@angular/core';
     
export class News{
    title: string;
    text: string;
    author: string;
    date: string;
     
    constructor(title: string, text: string) {
  
        this.title = title;
        this.text = text;
    }
}

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
                                <span class="glyphicons glyphicons-remove"></span>
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
    newsList: News[] = 
    [
        {title:"Title",text:"MyText",author:"Alex",date:"23/4/2017"},
        {title:"Title2",text:"MyText2",author:"Alex",date:"23/4/2017"}
    ];
    addNews(title: string,text: string): void {
         
        if(text==null || text==undefined || text.trim()=="")
            return;
        if(title==null || title==undefined || title.trim()=="")
            return;
        this.newsList.push(new News(title,text));
    }
}