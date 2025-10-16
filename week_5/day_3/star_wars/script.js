const btn = document.getElementById("getCharacterBtn");
const loading = document.getElementById("loading");
const card = document.getElementById("characterCard");
const errorDiv = document.getElementById("error");

const nameEl = document.getElementById("charName");
const heightEl = document.getElementById("charHeight");
const genderEl = document.getElementById("charGender");
const birthEl = document.getElementById("charBirth");
const worldEl = document.getElementById("charWorld");

const getCharacter = async () => {
  const randomId = Math.floor(Math.random() * 83) + 1;

  try {
    // Reset UI
    loading.classList.remove("hidden");
    card.classList.add("hidden");
    errorDiv.classList.add("hidden");

    // Fetch character
    const res = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
    if (!res.ok) throw new Error("Oh No! That person isnt available.");

    const data = await res.json();
    const character = data.result.properties;

    // Fetch homeworld
    const worldRes = await fetch(character.homeworld);
    const worldData = await worldRes.json();

    // Update DOM
    nameEl.textContent = character.name;
    heightEl.textContent = character.height;
    genderEl.textContent = character.gender;
    birthEl.textContent = character.birth_year;
    worldEl.textContent = worldData.result.properties.name;

    card.classList.remove("hidden");
  } catch (err) {
    errorDiv.textContent = `${err.message}`;
    errorDiv.classList.remove("hidden");
  } finally {
    loading.classList.add("hidden");
  }
};

btn.addEventListener("click", getCharacter);
