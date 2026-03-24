// Select the button and joke container elements from the HTML
const jokeBtn = document.getElementById('joke-btn');
const setup = document.getElementById('setup');
const punchline = document.getElementById('punchline');


// Add an event listener to the button
jokeBtn.addEventListener('click', function() {
  console.log('Getting a joke...');
  fetch('https://official-joke-api.appspot.com/random_joke')
    .then(response => response.json())
    .then(data => {
      setup.textContent = data.setup;
      punchline.textContent = data.punchline;
    })
});