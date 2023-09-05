import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ArticleComponent} from "./article/article.component";
import {Error404Component} from "./error404/error404.component";
import {CardComponent} from "./card/card.component";
import {CardDetailComponent} from "./card-detail/card-detail.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pokemons', component: CardComponent},
  {path: 'pokemons/:id', component: CardDetailComponent},
  {path: 'article', component: ArticleComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
