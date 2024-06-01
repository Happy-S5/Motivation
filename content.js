// Check if the current URL contains 'facebook.com' or 'linkedin.com'
const currentURL = window.location.href.toLowerCase();
if (currentURL.includes('facebook.com') || currentURL.includes('linkedin.com')) || currentURL.includes('https://www.pandora.com/station/')) {

  // Prompt the user if they want to run the extension
  const runExtension = confirm('Do you want to run the extension?');
  
  if (runExtension) {
    // Create a div element to hold the overlay text
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.zIndex = 9999;
    overlay.style.top = '10px';

    // Prompt the user for the right endpoint
    const rightEndpoint = prompt('Enter the right endpoint (in pixels):', '200');
    overlay.style.right = rightEndpoint + 'px';

    // Prompt the user for the text color
    const textColor = prompt('Enter the text color:', 'Orange');
    overlay.style.color = textColor;

    overlay.style.fontSize = '24px';
    overlay.style.backgroundColor = 'rgba(255, 255, 255, 0)';
    overlay.style.padding = '5px 10px';
    overlay.style.borderRadius = '5px';

    // Add the overlay to the page
    document.body.appendChild(overlay);

    // Create an array of words
    const messages = ['MIT Quality', 'Intelligent Man', 'Chemical Engineer', 'Respectful', 'CIA', 'Drink Water', 'Biological Scientist', 'Fivecast Intel Hub']; // Replace with your desired words

    // Make the overlay text flash and change words
    let messageIndex = 0;
    const flashInterval = 10000; // Change this to the desired flash interval in milliseconds
    const flashDuration = 200; // Change this to the desired flash duration in milliseconds
    setInterval(() => {
      overlay.style.display = overlay.style.display === 'none' ? 'block' : 'none';
      if (overlay.style.display === 'block') {
        overlay.innerText = messages[messageIndex];
        messageIndex = (messageIndex + 1) % messages.length;
        setTimeout(() => {
          overlay.style.display = 'none';
        }, flashDuration);
      }
    }, flashInterval);
  } else {
    // Don't load the extension if the user doesn't want to run it
    console.log('Extension not loaded.');
  }
} else {
  // Do nothing if the current URL is not Facebook or LinkedIn
  console.log('Extension not loaded.');
}
