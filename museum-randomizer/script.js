// Load museums data when the page loads
let museums = [];

fetch('./museums.json') // Relative path to museums.json at root
    .then(response => {
        if (!response.ok) throw new Error('Failed to load museums.json');
        return response.json();
    })
    .then(data => {
        museums = data; // Store the museum data
    })
    .catch(error => {
        console.error('Error loading museums:', error);
        document.getElementById('museumDisplay').innerHTML = 'Failed to load museum data.';
    });

// Randomize museum on button click
document.getElementById('randomizeBtn').addEventListener('click', () => {
    if (museums.length === 0) {
        document.getElementById('museumDisplay').innerHTML = 'No museums available yet. Please wait or refresh.';
        return;
    }
    const randomIndex = Math.floor(Math.random() * museums.length);
    const museum = museums[randomIndex];
    document.getElementById('museumDisplay').innerHTML = `
        <h2>${museum.name}</h2>
        <p>${museum.description}</p>
        <a href="${museum.url}" target="_blank">Visit Website</a>
    `;
});