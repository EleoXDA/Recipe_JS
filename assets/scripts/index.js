// Select the search form and the search input field
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('#recipe-search');

// Listen for form submission
searchForm.addEventListener('submit', function(event) {
  // Prevent the form from being submitted
  event.preventDefault();

  // Get the search term
  const searchTerm = searchInput.value;

  // Log the search term to the console
  console.log(`Searching for recipes related to "${searchTerm}"...`);
});
