const puppyGrid = document.querySelector('.puppy-grid');

// Placeholder Puppy Data
const samplePuppies = [
  { name: "Puppy #1", image: "https://place-puppy.com/300x300" },
  { name: "Puppy #2", image: "https://place-puppy.com/301x301" },
  { name: "Puppy #3", image: "https://place-puppy.com/302x302" },
  { name: "Puppy #4", image: "https://place-puppy.com/303x303" },
  { name: "Puppy #5", image: "https://place-puppy.com/304x304" },
];

// Copy Button Functionality
document.querySelector('.copy-btn').addEventListener('click', () => {
  const contractInput = document.querySelector('.contract input');
  navigator.clipboard.writeText(contractInput.value);
  alert('Contract address copied to clipboard!');
});

// Render Puppy Placeholders
function renderPuppiesPlaceholder() {
  puppyGrid.innerHTML = ""; // Clear the grid
  samplePuppies.forEach((puppy) => {
    const puppyCard = document.createElement('div');
    puppyCard.innerHTML = `
      <img src="${puppy.image}" alt="${puppy.name}">
      <div><strong>${puppy.name}</strong></div>
    `;
    puppyGrid.appendChild(puppyCard);
  });
}

renderPuppiesPlaceholder();
