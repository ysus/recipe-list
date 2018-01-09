import { Recipe } from "./recipe.model";

export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe 1 ',
            'This is a simple recipe',
            'http://img.delicious.com.au/8GI56Qp4/h506-w759-cfill/del/2016/07/curried-lamb-shank-amaranth-and-chickpea-soup-33427-3.jpg'
        ),
        new Recipe(
            'A Test Recipe 2',
            'This is a simple recipe desc',
            'http://img.delicious.com.au/8GI56Qp4/h506-w759-cfill/del/2016/07/curried-lamb-shank-amaranth-and-chickpea-soup-33427-3.jpg'
        )
    ];

    getRecipes(){
        return this.recipes.slice();
    }

}