import { Component, OnInit } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCommits;
  imgSrc: string;
  constructor(private _api: GithubService) { }

  ngOnInit() {
    this.getCommits();
  }

  getCommits() {
    this._api.getCommits().then(output => {
      this.allCommits = output;
      console.log(output);
    });
  }

  getSrc(url) {
    return url;
  }

}