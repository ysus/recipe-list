import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1 ',
            'This is a simple recipe',
            'http://img.delicious.com.au/8GI56Qp4/h506-w759-cfill/del/2016/07/curried-lamb-shank-amaranth-and-chickpea-soup-33427-3.jpg', [
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 8)
            ]

        ),
        new Recipe(
            'A Test Recipe 2',
            'This is a simple recipe desc',
            'http://img.delicious.com.au/8GI56Qp4/h506-w759-cfill/del/2016/07/curried-lamb-shank-amaranth-and-chickpea-soup-33427-3.jpg', [
                new Ingredient('Bread', 15),
                new Ingredient('Tomatoes', 8)
            ]
        )
    ];

    constructor(private slService:ShoppingListService){

    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number){
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients:Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

}