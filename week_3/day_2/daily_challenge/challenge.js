// Array of objects: each planet has a name, color, and number of moons
const planets = [
  { name: "Mercury", color: "gray", moons: 0 },
  { name: "Venus", color: "orange", moons: 0 },
  { name: "Earth", color: "blue", moons: 1 },
  { name: "Mars", color: "red", moons: 2 },
  { name: "Jupiter", color: "brown", moons: 10 },
  { name: "Saturn", color: "goldenrod", moons: 20 },
  { name: "Uranus", color: "lightblue", moons: 23 },
  { name: "Neptune", color: "darkblue", moons: 8 }
];

// Select the section where planets will be displayed
const section = document.querySelector('.listPlanets');

// Loop through the planets array
planets.forEach(planet => {
  // Create a div for the planet
  const planetDiv = document.createElement('div');
  planetDiv.classList.add('planet');
  planetDiv.style.backgroundColor = planet.color;
  planetDiv.textContent = planet.name;

  // Create moons for each planet
  for (let i = 0; i < planet.moons; i++) {
    const moon = document.createElement('div');
    moon.classList.add('moon');

    // Position moons randomly around the planet
    const angle = Math.random() * 2 * Math.PI;
    const distance = 60 + Math.random() * 40; // distance from planet center
    moon.style.left = `${50 + Math.cos(angle) * distance}px`;
    moon.style.top = `${50 + Math.sin(angle) * distance}px`;

    planetDiv.appendChild(moon);
  }

  // Add the planet to the section
  section.appendChild(planetDiv);
});
