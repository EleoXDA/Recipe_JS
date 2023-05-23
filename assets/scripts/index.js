let recipes = [
  {
    title: 'Recipe 1',
    image: '../images/food01.jpg',
    description: 'This is recipe 1'
  },
  {
    title: 'Recipe 2',
    image: '../images/food01.jpg',
    description: 'This is recipe 2'
  },
   {
    title: 'Recipe 3',
    image: '../images/food01.jpg',
    description: 'This is recipe 3'
  },
  {
    title: 'Recipe 4',
    image: '../images/food01.jpg',
    description: 'This is recipe 4'
  },
  {
    title: 'Recipe 5',
    image: '../images/food01.jpg',
    description: 'This is recipe 5'
  },
  {
    title: 'Recipe 6',
    image: '../images/food01.jpg',
    description: 'This is recipe 6'
  },
  {
    title: 'Recipe 7',
    image: '../images/food01.jpg',
    description: 'This is recipe 7'
  },
  {
    title: 'Recipe 8',
    image: '../images/food01.jpg',
    description: 'This is recipe 8'
  },
  {
    title: 'Recipe 9',
    image: '../images/food01.jpg',
    description: 'This is recipe 9'
  },
  {
    title: 'Recipe 10',
    image: '../images/food01.jpg',
    description: 'This is recipe 10'
  },
];

let currentRecipe = 0;

setInterval(() => {
  document.getElementById('carousel-image').src = recipes[currentRecipe].image;
  document.getElementById('carousel-title').innerText = recipes[currentRecipe].title;
  document.getElementById('carousel-description').innerText = recipes[currentRecipe].description;

  currentRecipe = (currentRecipe + 1) % recipes.length;
}, 3000);

let stars = document.querySelectorAll('.star');

stars.forEach(star => {
  star.addEventListener('mouseover', () => {
    let value = star.dataset.value;
    for (let i = 0; i < value; i++) {
      stars[i].classList.add('hover');
    }
    for (let i = value; i < stars.length; i++) {
      stars[i].classList.remove('hover');
    }
  });

  star.addEventListener('mouseout', () => {
    stars.forEach(star => star.classList.remove('hover'));
  });

  star.addEventListener('click', () => {
    let value = star.dataset.value;
    // ...handle the rating click event...
    console.log(`User rated this recipe as ${value}`);
  });
});

let favoriteButtons = document.querySelectorAll('.favorite');

favoriteButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('favorited');
    let favorited = button.classList.contains('favorited');
    if (favorited) {
      // ...add to favorites...
      console.log('Recipe added to favorites');
    } else {
      // ...remove from favorites...
      console.log('Recipe removed from favorites');
    }
  });
});

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
  };

  // Log the search term to the console
  console.log(`Searching for recipes related to "${searchTerm}"...`);
});
