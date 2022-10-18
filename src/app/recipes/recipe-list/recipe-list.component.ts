import { Component, OnInit } from '@angular/core';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes : Recipes[] = [new Recipes('Idli','Healthiest Dish in the World','https://www.sharmispassions.com/wp-content/uploads/2020/12/idli12-460x500.jpg'),
  new Recipes('Dosa','South Indian cuisine thin, crisp crepe or pancake.','https://static.toiimg.com/thumb/63841432.cms?width=1200&height=900')];

  constructor() {
    console.log(this.recipes[0].recipeName);
   }
  
  
  ngOnInit(): void {
  }

}
