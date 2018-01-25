import { Injectable } from "@angular/core";
import { HttpClient,HttpResponse } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";

@Injectable()
export class DataStorageService{
    constructor(private http:HttpClient, private recipeService:RecipeService){

    }

    storeRecipe(){
        return this.http.put(
            'https://ng-recipe-book-b7a60.firebaseio.com/recipes.json',
            this.recipeService.getRecipes()
        )       
    }

    getRecipes(){
        return this.http.get(
            'https://ng-recipe-book-b7a60.firebaseio.com/recipes.json'
        ).subscribe(
            (response:any)=>{
                const recipes: Recipe[] = response;
                this.recipeService.setRecipes(recipes);
            }
        )
    }

}
