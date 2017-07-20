import { Component } from '@angular/core';

@Component({
    selector: 'authorization',
    styleUrls: ['app/Authorization/authorization.component.css'],
    template: `
        <div class="row auth">
            <div class="col-md-6 col-md-offset-3">
                <div class="form-group">
                    <label for="inputEmail3" class="col-sm-2 control-label">Email</label>
                    <div class="col-sm-10">
                    <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword3" class="col-sm-2 control-label">Пароль</label>
                    <div class="col-sm-10">
                    <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
                    </div>
                </div>
                <div class="form-group">
                    <div class="col-sm-offset-2 col-sm-10">
                    <button type="submit" class="btn btn-default">Войти</button>
                    </div>
                </div>
            </div>
        </div>

     `  
})

export class AuthorizationComponent {
    name = '';
}