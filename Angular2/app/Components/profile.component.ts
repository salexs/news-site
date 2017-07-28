import { Component, DoCheck, OnInit, OnChanges } from '@angular/core';


@Component({
    selector: 'profile',
    template: `<div class='col-md-9 col-md-offset-1'>
                    <div class="jumbotron">
                        <h2>Aleksey</h2>
                        <p>email: alex@dunice.ru</p>
                        <p><a class="btn btn-primary btn-lg" href="#" role="button">Show more</a></p>
                    </div>
                </div>
                 `
})
export class Profile  {

}