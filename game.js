const question=document.getElementById("question");
const choices=Array.from(document.getElementsByClassName("choice-text"));
const scr=document.getElementById("score");
const quesNo=document.getElementById("hud-prefix");
const pro=document.getElementById("progressBarFull");
let currQuestion={};
let acceptingAnswers=false;
let score=0;
let quesCounter=0;
let availableQues=[];
let questions=[
    {
        question:"what is your name?",
        choice1:"san",
        choice2:"sabbn",
        choice3:"sban",
        choice4:"bban",
        answer: 1
    },
    {
        question:"what is your scl?",
        choice1:"san",
        choice2:"sabbn",
        choice3:"sban",
        choice4:"bban",
        answer: 1
    },
    {
        question:"what is your age?",
        choice1:"12",
        choice2:"134",
        choice3:"15",
        choice4:"45",
        answer: 1
    },
    {
        question:"what is your class?",
        choice1:"1",
        choice2:"2",
        choice3:"3",
        choice4:"4",
        answer: 1
    },
]
const correctBonus=10;
const maxQuestions=questions.length;
startGame=()=>{
    quesCounter=0;
    score=0;
    availableQues=[...questions];
    getNewQues();
}
getNewQues=()=>{
    if(availableQues.length===0 || quesCounter>=maxQuestions) {
       const mostrecentscore=localStorage.setItem("mostrecentscore",score);
        return window.location.assign("./end.html");
    }
    // console.log(quesCounter);
    // console.log(availableQues.length);
    quesCounter++;
    const quesIdx=Math.floor(Math.random()*availableQues.length);
    currQuestion=availableQues[quesIdx];
    question.innerHTML=currQuestion.question;
    quesNo.innerText=`Question ${quesCounter}/${questions.length}`
    pro.style.width=`${((quesCounter/questions.length)*100)}%`
    choices.forEach(choice=>{
    const num=choice.dataset["number"];
choice.innerText=currQuestion["choice"+num];

    });
    availableQues.splice(quesIdx,1);
    console.log("question count , avail");
    console.log(quesCounter);
    console.log(availableQues.length);
    acceptingAnswers=true; 
};

    choices.forEach(choice=>{
        choice.addEventListener("click",e=>{
            console.log(e.target);
            if(!acceptingAnswers) return;
            acceptingAnswers=false;
            const selectedChoice=e.target;
            const selectedAns=selectedChoice.dataset["number"];
            console.log("check eqality");
            console.log(currQuestion.answer);
            console.log(selectedAns);
            const classToApply=currQuestion.answer==selectedAns?"correct":"incorrect";
            selectedChoice.parentElement.classList.add(classToApply);
            if(classToApply=="correct"){
                score+=10;
                scr.innerText=score;
            }
            setTimeout(()=>{
                selectedChoice.parentElement.classList.remove(classToApply);
                getNewQues();
            },1000)
            
        })
    })




startGame();
