import { Component } from '@angular/core'
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  articles: Article[]

  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 123),
      new Article('React', 'http://react.io', 89),
      new Article('Ember', 'http://ember.io', 55),
      new Article('Vanilla', 'http://vanilla.io', 20),
    ]
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`)
    this.articles.push(new Article(title.value, link.value, 0))
    title.value = ''
    link.value = ''
    return false
  }
}
