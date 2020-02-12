const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

// To make sure a username is given before making save available
username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = e => {
  console.log("clicked the save button!");
  e.preventDefault();

  const score = {
    // score: mostRecentScore,
    score: Math.floor(Math.random() * 100),
    name: username.value 
  };
  highScores.push(score);
  highScores.sort( (a,b) => b.score - a.score);
  highScores.splice(MAX_HIGH_SCORES);
  
  localStorage.setItem('highScores', JSON.stringify(highScores));

  window.location.assign("index.html")

};
