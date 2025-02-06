const username=document.getElementById("username");
const finalScore=document.getElementById("finalScore");
const saveScoreBtn=document.getElementById("saveScoreBtn");
const mostrecentscore=localStorage.getItem("mostrecentscore");
console.log(  `most recent score ${mostrecentscore}  `);
finalScore.innerText=mostrecentscore;
//localStorage.setItem("highScore",JSON.stringify([]));
const highScore=JSON.parse(localStorage.getItem("highScore")) || [];
const MAX_HIGH_SCORES=5;
console.log(`high score ${highScore}  `);
username.addEventListener("keyup", ()  => {
  // console.log(username.value);
  saveScoreBtn.disabled= !username.value;
});

function saveHighScore(e){
    console.log("clicked btn");
    e.preventDefault();
     
    const score={
      score:Math.floor(Math.random()*100),
      name:username.value
    };
    highScore.push(score);
    highScore.sort((a,b)=> b.score-a.score);
    highScore.splice(5);
    localStorage.setItem("highScore",JSON.stringify(highScore));
    window.location.assign("./index.HTML");
    console.log(highScore);
    
};