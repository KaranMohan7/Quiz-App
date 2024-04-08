const questions = [
    {
        que: "which of the following is the Markup Language?",
        answers: [
            { Text: "CSS" ,correct: false},
            {Text: "JAVASCRIPT" ,correct:false},
            {Text: "JAVA" ,correct:false},
            {Text: "HTML" ,correct:true},
        ]
    },
    {
        que: "In which year javascript launched",
         answers: [
            { Text: "1995" ,correct: true},
            {Text: "1992" ,correct:false},
            {Text: "1990" ,correct:false},
            {Text: "1889" ,correct:false},
        ]
     },

     {
        que: "What is the National Bird of India?",
        answers: [
           { Text: "Peacock" ,correct: true},
           {Text: "Elephant" ,correct:false},
           {Text: "Parrot" ,correct:false},
           {Text: "Sparrow" ,correct:false},
       ]
     },

     {
        que: "Who is Bill Gates",
         answers: [
            { Text: "He is From Microsoft" ,correct: true},
            {Text: "He is from Google" ,correct:false},
            {Text: "He is from JP Morgan" ,correct:false},
            {Text: "He is from Adobe" ,correct:false},
        ]
     },
     {
        que: "Which is the Smallest Continent of the World?",
        answers: [
           { Text: "Asia" ,correct: false},
           {Text: "Australia" ,correct:true},
           {Text: "Africa" ,correct:false},
           {Text: "Bhutan" ,correct:false},
       ]
     },
     {
     que: "Which language Supports Multithreading ?",
     answers: [
        {Text: "C++",correct:false},
        {Text: "C", correct:false},
        {Text: "Java",correct:true},
        {Text: "Ruby", correct:false}

     ]
     }
]
let quesidx = 0;
let score = 0;
let mainquestions = document.querySelector("#question");
let buttonsM = document.querySelector("#btnss-main");
let nextbtn = document.querySelector("#nextbtn");

function startquiz(){
    quesidx = 0;
    score = 0;
    nextbtn.innerText = "NEXT";
    quesshow();
}
function quesshow(){
    resetstate();
    let currentquestion =  questions[quesidx];
    let currentquestionno = quesidx+1;
    mainquestions.innerText = currentquestionno + '.' +currentquestion.que;
    
    currentquestion.answers.forEach(ans => {
        const butttton = document.createElement("button");
        butttton.innerText = ans.Text;
        butttton.classList.add("btn");
        buttonsM.appendChild(butttton);
        if(ans.correct){
            butttton.dataset.correct = ans.correct;
        }
        butttton.addEventListener("click",selectanswer);

});
}

resetstate = () => {
  while(buttonsM.firstChild){
    nextbtn.style.display = "none";
    buttonsM.removeChild(buttonsM.firstChild);
  }
}
function selectanswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
    }else{
        selectedbtn.classList.add("incorrect");
    }
    Array.from(buttonsM.children).forEach(butt =>{
        if(butt.dataset.correct==="true"){
            butt.classList.add("correct");
        }
        butt.disabled = true;
    });
    nextbtn.style.display = "block";
}
function handle() {
   quesidx++;
   if(quesidx<questions.length){
       quesshow();
   }else{
        showscore();
   }
}
function showscore(){
    resetstate();
  mainquestions.innerText = `your score is ${score}`;
  nextbtn.innerText = "Play Again";
  nextbtn.style.display = "block";
}
nextbtn.addEventListener("click",()=>{
if(quesidx < questions.length){
   handle();
}else{
    startquiz();
}
});

startquiz();
