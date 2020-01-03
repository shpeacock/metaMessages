import { Component, OnInit, Input } from '@angular/core';
import { GithubService } from '../github.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allCommits;
  imgSrc: string;
  details: boolean = false;

  constructor(private _api: GithubService) { }

  ngOnInit() {
    this.getCommits();
  }

  getCommits() {
    this._api.getCommits().then(output => {
      this.allCommits = output;
    });
  }

  //adding this conditional because sometimes the commit won't have an author attribute
  getSrc(commit) {
    if (commit.author) {
      return commit.author.avatar_url;
    } else {
      return '../assets/images/catch.png';
    }
  }

  getDetails() {
    this.details = !this.details;
  }

}