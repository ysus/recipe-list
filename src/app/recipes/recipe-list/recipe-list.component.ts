import { Component, OnInit } from '@angular/core';
import { Recipe } from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe(
    'A Test Recipe',
    'This is a simple recipe',
    'http://img.delicious.com.au/8GI56Qp4/h506-w759-cfill/del/2016/07/curried-lamb-shank-amaranth-and-chickpea-soup-33427-3.jpg'),
    new Recipe(
    'A Test Recipe',
    'This is a simple recipe',
    'http://img.delicious.com.au/8GI56Qp4/h506-w759-cfill/del/2016/07/curried-lamb-shank-amaranth-and-chickpea-soup-33427-3.jpg')
];
  constructor() { }

  ngOnInit() {
  }

}
