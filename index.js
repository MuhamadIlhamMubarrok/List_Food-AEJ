const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const foodList = document.querySelector("#foodList");
const itemsPerPage = 9;
const totalItems = 50;
const totalPages = Math.ceil(totalItems / itemsPerPage);

generatePagination(totalPages);

function generatePagination(totalPages) {
  const paginationContainer = document.getElementById("pagination");

  // Clear the pagination container
  paginationContainer.innerHTML = "";

  // Create the previous button
  const previousButton = document.createElement("button");
  previousButton.innerText = "Previous";
  previousButton.classList.add("pagination-button");
  previousButton.disabled = true; // Disable the previous button initially
  paginationContainer.appendChild(previousButton);

  // Create the page buttons
  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.innerText = i;
    pageButton.classList.add("pagination-button");
    paginationContainer.appendChild(pageButton);

    // Add an event listener to each page button
    pageButton.addEventListener("click", () => {
      searchFood(i);
    });
  }

  // Create the next button
  const nextButton = document.createElement("button");
  nextButton.innerText = "Next";
  nextButton.classList.add("pagination-button");
  if (totalPages === 1) {
    nextButton.disabled = true; // Disable the next button if there's only one page
  }
  paginationContainer.appendChild(nextButton);
}

const searchFood = async (pageNumber) => {
  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  foodList.innerHTML = "";

  try {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput.value}`);
    const food = await response.json();
    console.log("gas", food);

    if (food.meals) {
      for (let i = startIndex; i < endIndex && i < food.meals.length; i++) {
        const foodItem = document.createElement("div");
        foodItem.setAttribute("class", "foodItem");

        foodItem.innerHTML = `
          <img src="${food.meals[i].strMealThumb}">
          <h1>${food.meals[i].strMeal}</h1>
        `;

        foodList.appendChild(foodItem);
      }
    } else {
      alert(`Maaf menu ${searchInput.value} tidak tersedia`);
    }
  } catch (error) {
    console.error(error);
    alert("Terjadi kesalahan dalam mengambil data makanan.");
  }
};


searchButton.addEventListener("click", () => {
  searchFood(1);
});
