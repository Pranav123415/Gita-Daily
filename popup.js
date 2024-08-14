document.addEventListener('DOMContentLoaded', function() {
  const randomChapter = getRandomInt(1, 18);
  const randomSlok = getRandomInt(1, 29);
  
  fetchSlok(randomChapter, randomSlok);
});

function fetchSlok(chapter, slok) {
  fetch(`https://vedicscriptures.github.io/slok/${chapter}/${slok}`)
    .then(response => response.json())
    .then(data => {
      const sivanandaTranslation = data.siva.et;
      document.getElementById('slokContent').innerText = sivanandaTranslation;
    })
    .catch(error => {
      console.error('Error fetching slok:', error);
      document.getElementById('slokContent').innerText = 'Error fetching slok.';
    });
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
