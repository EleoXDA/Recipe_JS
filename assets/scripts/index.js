// Array of recipe objects, each containing a title, image path, and description

let recipes = [
  {
    title: 'Recipe 1',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 1',
  },
  {
    title: 'Recipe 2',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 2',
  },
  {
    title: 'Recipe 3',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 3',
  },
  {
    title: 'Recipe 4',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 4',
  },
  {
    title: 'Recipe 5',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 5',
  },
  {
    title: 'Recipe 6',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 6',
  },
  {
    title: 'Recipe 7',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 7',
  },
  {
    title: 'Recipe 8',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 8',
  },
  {
    title: 'Recipe 9',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 9',
  },
  {
    title: 'Recipe 10',
    image: 'assets/images/food01.jpg',
    description: 'This is recipe 10',
  },
];

if (localStorage.getItem('recipes')) {
  recipes = JSON.parse(localStorage.getItem('recipes'));
}

// Initialize a variable to keep track of the current recipe
let currentRecipe = 0;

// Preload the images to avoid any flickering when changing the image
let preloadedImages = [];

// Loop through the recipes and preload the images
recipes.forEach((recipe, index) => {
  let img = new Image(); // Create a new Image object
  img.src = recipe.image; // Set the source of the image
  preloadedImages[index] = img; // Store the Image object in the array
});

// Change the displayed recipe every 3 seconds
setInterval(() => {
  // Set the source of the image to the preloaded image
  document.getElementById('carousel-image').src =
    preloadedImages[currentRecipe].src;

  // Update the title and description
  document.getElementById('carousel-title').innerText =
    recipes[currentRecipe].title;
  document.getElementById('carousel-description').innerText =
    recipes[currentRecipe].description;

  // Increment the current recipe, looping back to 0 if it exceeds the number of recipes
  currentRecipe = (currentRecipe + 1) % recipes.length;
}, 3000);

// Handle star ratings
let stars = document.querySelectorAll('.star');
stars.forEach((star, index) => {

  // When the mouse is over a star, highlight all stars up to and including that one
  star.addEventListener('mouseover', () => {
    let value = star.dataset.value;
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('hover');
    }
    for (let i = value; i < stars.length; i++) {
      stars[i].classList.remove('hover');
    }
  });

  // When the mouse leaves a star, unhighlight all stars
  star.addEventListener('mouseout', () => {
    stars.forEach((star) => star.classList.remove('hover'));
  });

  // When a star is clicked, log the rating to the console
  star.addEventListener('click', () => {
    let value = star.dataset.value;
    recipes[currentRecipe].rating = value;
    localStorage.setItem('recipes', JSON.stringify(recipes));

    console.log(`User rated this recipe as ${value}`);

    // Set the initial star rating when the page loads
    if (recipes[currentRecipe].rating >= star.dataset.value) {
      star.classList.add('filled');
    }
  });
});

// Handle favorites
let favoriteButtons = document.querySelectorAll('.favorite');

favoriteButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // Toggle the 'favorited' class
    button.classList.toggle('favorited');
    // Check if the button has the 'favorited' class
    let favorited = button.classList.contains('favorited');
    // Update the recipe favorited status
    recipes[currentRecipe].favorited = favorited;
    // Save the recipes to local storage
    localStorage.setItem('recipes', JSON.stringify(recipes));

    if (favorited) {
      console.log('Recipe added to favorites');
    } else {
      console.log('Recipe removed from favorites');
    }
  });
  // Set the initial favorite status when the page loads
  if (recipes[currentRecipe].favorited) {
    button.classList.add('favorited');
  }
});

// Handle search form submission
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#recipe-search');

searchForm.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the form from being submitted normally

  const searchTerm = searchInput.value; // Get the search term

  // Make sure the search term is not empty
  if (searchTerm.length === 0) {
    alert('Please enter a search term.');
    return;
  }

  // Log the search term to the console
  console.log(`Searching for recipes related to "${searchTerm}"...`);
});
