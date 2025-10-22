const express = require('express');
const emojis = require('./emojis');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let score = 0;
let leaderboard = [];

function getRandomQuestion() {
    const correct = emojis[Math.floor(Math.random() * emojis.length)];

    const options = emojis
        .filter(e => e.name !== correct.name)
        .sort(() => 0.5 - Math.random())
        .slice(0, 2);

    options.push(correct);

    options.sort(() => 0.5 - Math.random());
    
    return { emoji: correct.emoji, options: options.map(o => o.name), correct: correct.name };
}

app.get('/question', (req, res) => {
    res.json(getRandomQuestion());
});

app.post('/guess', (req, res) => {
    const { guess, correct } = req.body;
    if (guess === correct) score++;
    res.json({ correct: guess === correct, score });
});

app.get('/leaderboard', (req, res) => res.json(leaderboard));

app.post('/leaderboard', (req, res) => {
    const { player } = req.body;
    leaderboard.push({ player, score });
    leaderboard.sort((a, b) => b.score - a.score);
    score = 0;
    res.json(leaderboard);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
