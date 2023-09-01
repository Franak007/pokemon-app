import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: `article.component.html`,
  styles: []
})
export class ArticleComponent {

  articles: string[] = [
      "Pokemon article 1",
      "Pokemon article 2",
      "Pokemon article 3",
      "Pokemon article 4",
      "Pokemon article 5",
      "Pokemon article 6"
  ]

  showArticle(article: string)  {
    console.log("Vous avez sélectionné cet article : " + article);
  }

  resultForm(form: string)  {
    console.log("Vous avez écrit dans le formulaire ceci : " + form);
  }

}
