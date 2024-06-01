// Create an array of words
const messages = ['MIT Quality', 'Intelligent Man', 'Chemical Engineer', 'Respectful', 'Boat Builder', 'Drink Water', 'Biological Scientist', 'Fivecast Intel Hub']; // Replace with your desired words

// Make the overlay text flash and change words
let messageIndex = 0;
const flashInterval = 10000; // Change this to the desired flash interval in milliseconds
const flashDuration = 200; // Change this to the desired flash duration in milliseconds
setInterval(() => {
    document.title = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    setTimeout(() => {
        document.title = 'Original Title'; // Replace with your desired original title
    }, flashDuration);
}, flashInterval);
