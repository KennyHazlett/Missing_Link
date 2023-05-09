// Get the logo element by its ID
const logo = document.getElementById('logo');

// Add an event listener for the 'animationend' event
logo.addEventListener('animationend', () => {
  // Set the display property to 'none' when the animation ends
  logo.style.display = 'none';
});

// Add an event listener for the button click
document.querySelector('.cta-button').addEventListener('click', function(event) {
  console.log('Button clicked!'); // Add this line to log a message when the button is clicked

  // Create a new element for the ripple effect
  const ripple = document.createElement('span');
  ripple.classList.add('ripple');
  
  // Set the position and size of the ripple effect based on the click event
  const rect = event.target.getBoundingClientRect();
  ripple.style.left = event.clientX - rect.left + 'px';
  ripple.style.top = event.clientY - rect.top + 'px';
  
  // Append the ripple effect to the button
  this.appendChild(ripple);
  
  // Remove the ripple effect after the animation is complete
  setTimeout(() => {
    ripple.remove();
  }, 600);
});

document.querySelector('.ripple-button').addEventListener('click', function(event) {
  // Create a new element for the ripple effect
  const ripple = document.createElement('span');
  ripple.classList.add('ripple-effect');
  
  // Set the position and size of the ripple effect based on the click event
  ripple.style.left = event.clientX - event.target.getBoundingClientRect().left + 'px';
  ripple.style.top = event.clientY - event.target.getBoundingClientRect().top + 'px';
  
  // Append the ripple effect to the button
  this.appendChild(ripple);
  
  // Remove the ripple effect after the animation is complete
  setTimeout(() => {
    ripple.remove();
  }, 600);
});



