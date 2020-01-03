import { Injectable } from '@angular/core';
import 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor(private _http: HttpClient) { }

  getCommits() {
    return this._http.get(`https://api.github.com/repos/shpeacock/metaMessages/commits?`).toPromise()
  }

}
