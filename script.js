// Variables
let currentFrame = 0;

// array of story frames with images and captions
const story = [
  {
    image: "images/white_cat_sleeping_on_a_bench.jpg",
    caption: "Frame 1: The cat is sleeping"
  },
  {
    image: "images/stretching_cat.jpg",
    caption: "Frame 2: The cat wakes up and stretches"
  },
  {
    image: "images/cat.jpg",
    caption: "Frame 3: The cat is ready to play"
  }
];

// Function to update the page
function updateDisplay() {
  const frame = story[currentFrame];
  document.getElementById("image1").src = frame.image;
  document.getElementById("caption").textContent = frame.caption;
  document.getElementById("frame-count").textContent = `Frame ${currentFrame + 1} of ${story.length}`;
}

// Function to go to next frame
function nextFrame() {
  if (currentFrame < story.length - 1) {
    currentFrame++;
    updateDisplay();
  }
}

// Function to go to previous frame
function previousFrame() {
  if (currentFrame > 0) {
    currentFrame--;
    updateDisplay();
  }
}

// Event listeners
document.getElementById("sequence-one").addEventListener("click", previousFrame);
document.getElementById("sequence-two").addEventListener("click", nextFrame);

// Initialize
updateDisplay();