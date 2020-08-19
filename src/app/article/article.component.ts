import { Component, OnInit, HostBinding } from '@angular/core'
import { Article } from './article.model'
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row'
  article: Article

  constructor() {
    this.article = new Article('Rich', 'https://rich.com', 24)
  }
  voteUp() {
    this.article.votes += 1
    return false
  }
  // tslint:disable-next-line: typedef
  voteDown() {
    this.article.votes -= 1
    return false
  }

  ngOnInit(): void {}
}
