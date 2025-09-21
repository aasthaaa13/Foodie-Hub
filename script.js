document.addEventListener('DOMContentLoaded', function() {
    // Sample recipe data - in a real app, this would come from a database or API
    const recipes = {
        1: {
            title: "Classic Margherita Pizza",
            image: "/api/placeholder/900/500",
            prepTime: "15 mins",
            cookTime: "15 mins",
            servings: 4,
            difficulty: "Easy",
            rating: "4.8",
            ingredients: [
                "2 cups all-purpose flour",
                "1 teaspoon salt",
                "¾ teaspoon active dry yeast",
                "1 cup water",
                "2 tablespoons olive oil",
                "1 can (14 oz) tomato sauce",
                "Fresh mozzarella cheese",
                "Fresh basil leaves",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Mix flour, salt, yeast, water, and olive oil to form a dough.",
                "Let the dough rise for 1-2 hours.",
                "Preheat oven to 475°F (245°C).",
                "Roll out the dough and place on a baking sheet.",
                "Spread tomato sauce, add cheese and seasonings.",
                "Bake for 12-15 minutes until crust is golden.",
                "Top with fresh basil leaves before serving."
            ]
        },
        2: {
            title: "Spicy Vegetable Curry",
            image: "/api/placeholder/900/500",
            prepTime: "20 mins",
            cookTime: "25 mins",
            servings: 4,
            difficulty: "Medium",
            rating: "4.5",
            ingredients: [
                "2 tablespoons vegetable oil",
                "1 large onion, diced",
                "3 cloves garlic, minced",
                "1 tablespoon ginger, grated",
                "2 tablespoons curry powder",
                "1 teaspoon turmeric",
                "1 teaspoon cumin",
                "1 can (14 oz) diced tomatoes",
                "1 can (14 oz) coconut milk",
                "2 cups mixed vegetables (carrots, peas, potatoes)",
                "Salt to taste",
                "Fresh cilantro for garnish"
            ],
            instructions: [
                "Heat oil in a large pot over medium heat.",
                "Sauté onions until translucent, then add garlic and ginger.",
                "Add spices and cook for 1 minute until fragrant.",
                "Add tomatoes and cook for 3-4 minutes.",
                "Add vegetables and coconut milk, bring to a simmer.",
                "Cook for 20-25 minutes until vegetables are tender.",
                "Garnish with fresh cilantro before serving."
            ]
        },
        // Add data for other recipes (3-6) as needed
    };

    // Add data for remaining recipes
    recipes[3] = {
        title: "Fudgy Chocolate Brownies",
        image: "/api/placeholder/900/500",
        prepTime: "15 mins",
        cookTime: "25 mins",
        servings: 9,
        difficulty: "Easy",
        rating: "4.9",
        ingredients: [
            "½ cup butter",
            "1 cup white sugar",
            "2 eggs",
            "1 teaspoon vanilla extract",
            "⅓ cup unsweetened cocoa powder",
            "½ cup all-purpose flour",
            "¼ teaspoon salt",
            "¼ teaspoon baking powder"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C). Grease an 8-inch square pan.",
            "Melt butter in a large saucepan.",
            "Remove from heat and stir in sugar, eggs, and vanilla.",
            "Add cocoa, flour, salt, and baking powder; stir well.",
            "Spread batter into prepared pan.",
            "Bake for 25-30 minutes until a toothpick inserted comes out with a few crumbs.",
            "Let cool before cutting into squares."
        ]
    };

    // Get all view recipe buttons
    const viewButtons = document.querySelectorAll('.view-recipe');
    const modal = document.getElementById('recipeModal');
    const modalClose = document.querySelector('.modal-close');
    const ingredientsList = document.getElementById('ingredientsList');
    
    // Add click event to each view recipe button
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the recipe ID from the parent card
            const recipeCard = this.closest('.recipe-card');
            const recipeId = recipeCard.dataset.id;
            
            // Get the recipe data
            const recipe = recipes[recipeId];
            
            if (recipe) {
                // Update modal content with recipe data
                document.querySelector('.modal-recipe-title').textContent = recipe.title;
                document.querySelector('.modal-recipe-image').src = recipe.image;
                document.querySelector('.modal-recipe-image').alt = recipe.title;
                
                document.getElementById('prepTime').textContent = recipe.prepTime;
                document.getElementById('cookTime').textContent = recipe.cookTime;
                document.getElementById('servings').textContent = recipe.servings;
                document.getElementById('difficulty').textContent = recipe.difficulty;
                document.getElementById('rating').textContent = `⭐ ${recipe.rating}`;
                
                // Clear and populate ingredients list
                ingredientsList.innerHTML = '';
                recipe.ingredients.forEach(ingredient => {
                    const li = document.createElement('li');
                    li.textContent = ingredient;
                    ingredientsList.appendChild(li);
                });
                
                // Add instructions section if it doesn't exist
                let instructionsSection = document.querySelector('.instructions-section');
                if (!instructionsSection) {
                    instructionsSection = document.createElement('div');
                    instructionsSection.className = 'recipe-section instructions-section';
                    
                    const sectionTitle = document.createElement('h3');
                    sectionTitle.className = 'section-title';
                    sectionTitle.textContent = 'Instructions';
                    
                    const notebookPaper = document.createElement('div');
                    notebookPaper.className = 'notebook-paper';
                    
                    const instructionsList = document.createElement('ol');
                    instructionsList.className = 'instructions-list';
                    instructionsList.id = 'instructionsList';
                    
                    notebookPaper.appendChild(instructionsList);
                    instructionsSection.appendChild(sectionTitle);
                    instructionsSection.appendChild(notebookPaper);
                    
                    document.querySelector('.modal-body').appendChild(instructionsSection);
                }
                
                // Populate instructions
                const instructionsList = document.getElementById('instructionsList');
                instructionsList.innerHTML = '';
                recipe.instructions.forEach(instruction => {
                    const li = document.createElement('li');
                    li.textContent = instruction;
                    instructionsList.appendChild(li);
                });
                
                // Show the modal with animation
                modal.style.display = 'flex';
                setTimeout(() => {
                    modal.classList.add('show');
                }, 10);
            }
        });
    });
    
    // Close modal when clicking the close button
    modalClose.addEventListener('click', function() {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300); // Match this with your CSS transition time
    });
    
    // Close modal when clicking outside the content
    modal.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });
});

// Add after recipe 3 definition (around line 96)
    recipes[4] = {
        title: "Avocado Toast Supreme",
        image: "/api/placeholder/900/500",
        prepTime: "10 mins",
        cookTime: "5 mins",
        servings: 2,
        difficulty: "Easy",
        rating: "4.3",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "2 eggs",
            "2 slices of tomato",
            "Fresh cilantro or microgreens",
            "Red pepper flakes",
            "Salt and pepper to taste",
            "1 tablespoon olive oil"
        ],
        instructions: [
            "Toast the bread slices until golden brown.",
            "Mash the avocado in a bowl with salt and pepper.",
            "Heat olive oil in a pan and fry the eggs to your liking.",
            "Spread the mashed avocado on the toast.",
            "Top with fried egg, tomato slice, and herbs.",
            "Sprinkle with red pepper flakes and serve immediately."
        ]
    };

    recipes[5] = {
        title: "Classic Spaghetti Carbonara",
        image: "/api/placeholder/900/500",
        prepTime: "10 mins",
        cookTime: "15 mins",
        servings: 4,
        difficulty: "Medium",
        rating: "4.7",
        ingredients: [
            "1 pound spaghetti",
            "8 ounces pancetta or bacon, diced",
            "4 large eggs",
            "1 cup freshly grated Parmesan cheese",
            "1 teaspoon black pepper",
            "Salt to taste",
            "2 cloves garlic, minced (optional)"
        ],
        instructions: [
            "Bring a large pot of salted water to boil and cook spaghetti according to package directions.",
            "While pasta cooks, sauté pancetta in a large skillet until crispy.",
            "In a bowl, whisk together eggs, Parmesan, and pepper.",
            "Reserve 1/2 cup of pasta water, then drain pasta.",
            "Working quickly, add hot pasta to the skillet with pancetta.",
            "Remove from heat and pour in egg mixture, tossing constantly.",
            "Add pasta water as needed to create a creamy sauce.",
            "Serve immediately with extra Parmesan."
        ]
    };

    recipes[6] = {
        title: "Vegan Buddha Bowl",
        image: "/api/placeholder/900/500",
        prepTime: "20 mins",
        cookTime: "15 mins",
        servings: 2,
        difficulty: "Easy",
        rating: "4.6",
        ingredients: [
            "1 cup cooked quinoa",
            "1 sweet potato, diced and roasted",
            "1 cup chickpeas, rinsed and drained",
            "1 avocado, sliced",
            "1 cup mixed greens",
            "1/4 cup red cabbage, shredded",
            "2 tablespoons tahini",
            "1 tablespoon lemon juice",
            "1 tablespoon maple syrup",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Preheat oven to 400°F (200°C).",
            "Toss sweet potato with olive oil, salt, and pepper, then roast for 20-25 minutes.",
            "Prepare the dressing by mixing tahini, lemon juice, maple syrup, and 2-3 tablespoons of water.",
            "Assemble bowls with quinoa as the base.",
            "Arrange sweet potato, chickpeas, avocado, greens, and cabbage on top.",
            "Drizzle with tahini dressing and serve."
        ]
    };
