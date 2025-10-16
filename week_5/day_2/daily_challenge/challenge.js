const form = document.getElementById('gifForm');
const input = document.getElementById('searchInput');
const gifsContainer = document.querySelector('.gifs');
const deleteAllBtn = document.getElementById('deleteAll');
const apiKey = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

// Fetch random GIF based on user's input
const fetchGif = async (category) => {
    try {
    const response = await fetch(
        `https://api.giphy.com/v1/gifs/random?tag=${encodeURIComponent(category)}&api_key=${apiKey}`
    );
    if (!response.ok) throw new Error('Failed to fetch GIF');

    const data = await response.json();
    const gifUrl = data.data.images?.downsized_medium?.url;

    if (!gifUrl) throw new Error('No GIF found for this category');

    addGifToDOM(gifUrl);
} catch (error) {
    alert('Error: ' + error.message);
    }
};

// Add the gif to the DOM
const addGifToDOM = (url) => {
    const div = document.createElement('div');
    div.classList.add('gif-container');

    const img = document.createElement('img');
    img.src = url;
    img.alt = 'gif';

    const delBtn = document.createElement('button');
    delBtn.textContent = 'DELETE';
    delBtn.classList.add('delete-btn');
    delBtn.addEventListener('click', () => div.remove());

    div.appendChild(img);
    div.appendChild(delBtn);
    gifsContainer.appendChild(div); };

// Form submit event
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = input.value.trim();
    if (category) fetchGif(category);
    input.value = '';
});

// Delete all GIFs
deleteAllBtn.addEventListener('click', () => {
    gifsContainer.innerHTML = '';
});