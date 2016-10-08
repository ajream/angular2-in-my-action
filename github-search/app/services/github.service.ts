/**
 * Created by ajream on 2016/10/8.
 */
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id = 'a65fd0ac72b85c0f3a31';
    private client_secret = 'ec4027498682c4c3b874521d162f4a2c195ccae8';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'ajream';
    }

    getUser(){
        return this._http.get('https://api.github.com/users/' + this.username + '?client_id=' +this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    getRepos(){
        return this._http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' +this.client_id + '&client_secret=' + this.client_secret)
            .map(res => res.json())
    }

    updateUser(username: string) {
        this.username = username;
    }
}