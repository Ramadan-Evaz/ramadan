const queueElement = document.getElementById("queueNumber");

// Function to get the current queue number from localStorage
function getQueueNumber() {
  let storedQueueNumber = localStorage.getItem("queueNumber");
  if (storedQueueNumber === null) {
    // If no value in localStorage, initialize a random queue number above 100
    storedQueueNumber = Math.floor(Math.random() * 100) + 101;
    localStorage.setItem("queueNumber", storedQueueNumber);
  }
  return storedQueueNumber;
}

// Update the displayed queue number
function updateQueueDisplay() {
  let queueNumber = getQueueNumber();
  queueElement.textContent = `Queue Position: ${queueNumber}`;
}

// Decrease queue number every 1 second (1000 ms)
function updateQueue() {
  let currentQueueNumber = parseInt(localStorage.getItem("queueNumber"));
  if (currentQueueNumber > 0) {
    currentQueueNumber -= 1;
    localStorage.setItem("queueNumber", currentQueueNumber);
    queueElement.textContent = `Queue Position: ${currentQueueNumber}`;
  }
}

// Initial queue display
updateQueueDisplay();

// Decrease queue number every 1 second
setInterval(updateQueue, 1000);