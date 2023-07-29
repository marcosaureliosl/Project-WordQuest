const card = document.getElementById("myCard");

// Function to toggle the card when clicked
function toggleCard() {
  if (card.classList.contains("flipped")) {
    card.classList.remove("flipped");
  } else {
    card.classList.add("flipped");
  }
}

// Add click event listener to the card
card.addEventListener("click", toggleCard);
