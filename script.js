const recipes = [
    {
        "directions": [
            "Mix batter ingredients in a pre-sprayed 9-1/2-inch deep dish pie plate.  Spread pizza sauce evenly over batter.",
            "Top dough with pepperoni slices. Firmly push pepperoni into batter.  Sprinkle with cheese.",
            "Bake by placing in a cold oven; set temperature to 350 degrees F. Bake for 30 minutes or until done."
        ],
        "ingredients": [
            "Batter:",
            "Mazola Pure\u00ae Cooking Spray",
            "1 3/4 cups all-purpose flour",
            "2 envelopes Fleischmann's\u00ae RapidRise Yeast",
            "2 teaspoons sugar",
            "1/2 teaspoon salt",
            "3/4 cup very warm water (120 degrees F to 130 degrees F)",
            "2 tablespoons olive oil",
            "Topping:",
            "1/2 cup pizza sauce",
            "2 ounces pepperoni slices",
            "2 cups shredded mozzarella cheese"
        ],
        "title": "1-Dish Pepperoni Cheese Pizza Bake"
    },
    {
        "directions": [
            "Combine tomato, basil, olive oil, vinegar, salt, and black pepper in a large bowl; toss until tomato wedges are  evenly coated."
        ],
        "ingredients": [
            "1 large tomato, cut into wedges",
            "1 tablespoon chopped fresh basil",
            "1 tablespoon extra-virgin olive oil",
            "1 1/2 teaspoons red wine vinegar, or to taste",
            "1 pinch salt and ground black pepper to taste (optional)"
        ],

        "title": "10-Minute Tomato Basil Salad"
    },
    {
        "directions": [
            "Mix batter ingredients together in a pre-sprayed 8x8-inch baking dish. Let rest 5 to 10 minutes.",
            "Top batter evenly with chicken. Pour marinara sauce over chicken, sprinkle with cheese and herbs.",
            "Bake by placing in a COLD oven; set temperature to 350 degrees F. Bake for 30 minutes, or until done."
        ],
        "ingredients": [
            "Mazola Pure\u00ae Cooking Spray",
            "1\u2009\u00bd cups all-purpose flour",
            "2 envelopes Fleischmann's\u00ae RapidRise Yeast",
            "2 teaspoons sugar",
            "\u00bd teaspoon salt",
            "\u00be cup very warm water (120 degrees F to 130 degrees F)",
            "3 tablespoons olive oil",
            "12 ounces fully cooked, frozen, breaded chicken (breast or tenders), chopped",
            "2 cups spaghetti sauce",
            "1 cup Italian blend shredded cheese",
            "1 teaspoon Spice Islands\u00ae Italian Herb Seasoning"
        ],
        "title": "1-Dish Chicken Parmesan"
    },
    {
        "directions": [
            "Chill metal bowl and whisk attachment in refrigerator for 15 minutes. Pour cream into bowl.",
            "Beat heavy cream with an electric mixer until foamy. Gradually add sugar and vanilla extract, continuing to beat until stiff peaks form. Lift your beater or whisk straight up: the whipped cream will form sharp peaks."
        ],
        "ingredients": [
            "1 cup heavy whipping cream",
            "2 tablespoons superfine sugar",
            "1 teaspoon vanilla extract"
        ],
        "title": "121 Whipped Cream"
    }
];
let index = 0;
displayRecipe(index);
function displayRecipe(index) {
    const recipe = recipes[index];
    document.getElementById('recipeTitle').innerHTML = `${recipe.title}`;
    document.getElementById('recipeDirections').innerHTML = `${recipe.directions}`
    directions = "<ol style='list-style-position: inside; align-items: left;'>"
    for (let i = 0; i < recipe.directions.length; i++) {

        directions += "<li>" + recipe.directions[i] + "</li>"
    }
    directions += "</ol>"
    document.getElementById('recipeDirections').innerHTML = `${directions}`
    let ingredientsList = "<ul>"
    for (let i = 0; i < recipe.ingredients.length; i++) {

        ingredientsList += "<li>" + recipe.ingredients[i] + "</li>"
    }
    ingredientsList += "</ul>"
    document.getElementById('recipeIngredients').innerHTML = `${ingredientsList}`;
}
let prevButton = document.getElementById("prevButton")
let nextButton = document.getElementById("nextButton")
nextButton.addEventListener("click", function () {
    if (index < recipes.length) {
        index++
        displayRecipe(index)
    }
})
prevButton.addEventListener("click", function () {
    if (index > 0) {
        index--
        displayRecipe(index)
    }
})