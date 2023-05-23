let recipes = [
  {
    title: 'Recipe 1',
    image: '../images.Food01.jpg',
    description: 'This is recipe 1'
  },
  {
    title: 'Recipe 2',
    image: '../images.Food01.jpg',
    description: 'This is recipe 2'
  },
];

let currentRecipe = 0;

setInterval(() => {
  document.getElementById('carousel-image').src = recipes[currentRecipe].image;
  document.getElementById('carousel-title').innerText = recipes[currentRecipe].title;
  document.getElementById('carousel-description').innerText = recipes[currentRecipe].description;

  currentRecipe = (currentRecipe + 1) % recipes.length;
}, 3000);

// Select the search form and the search input field
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#recipe-search');

// Listen for form submission
searchForm.addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the search term
  const searchTerm = searchInput.value;
  
  if (searchTerm.length === 0) {
    alert("Please enter a search term.");
    return;

  // Log the search term to the console
  console.log(`Searching for recipes related to "${searchTerm}"...`);
});
