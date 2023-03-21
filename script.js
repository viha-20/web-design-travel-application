
function query(){
  window.location = "contact.html";
}
let questions = [
  {
    numb: 1,
    question: "What is the largest nation park in Sri Lanka?",
    answer: "Wilpattu National Park",
    options: [
      "Yala National Park",
      "Wilpattu National Park",
      "Wasgamuwa National Park",
      "Kumana National Park"
    ]
  },
  {
    numb: 2,
    question: "Which of the following is the tallest point in Sri Lanka?",
    answer: "Pidurutalagala",
    options: [
      "Adam's Peak",
      "Kirigalpoththa",
      "Babarakanda",
      "Pidurutalagala"
    ]
  },
  {
    numb: 3,
    question: " Cricket is the most popular sport in Sri Lanka. Whom did they beat in 1996 to win the World Cup?",
    answer: "Australia",
    options: [
      "Australia",
      "England",
      "India",
      "Pakisthan"
    ]
  },
  {
    numb: 4,
    question: "There’s a hipster-chic east coast village, famous for its surfing points that attract surfers from all over the world. Many of them make this beach their home during the surfing period -  which one is it?",
    answer: "Arugam Bay",
    options: [
      "Nilaveli Beach",
      "Arugam Bay",
      "Marble Beach",
      "Kalkudah Beach"
    ]
  },
  {
    numb: 5,
    question: "How was Sri Lanka formely known?",
    answer: "Ceylon",
    options: [
      "Formosa",
      "Burma",
      "Ceylon",
      "Thailand"
    ]
  },
  {
    numb: 6,
    question: "Most beautiful beach in Sri Lanka?",
    answer: "Unawatuna",
    options: [
      "Nilaweli",
      "Marble Beach",
      "Jungle Beach",
      "Unawatuna"
    ]
  },
  {
    numb: 7,
    question: "What is the religion that is most practiced in Sri Lanka?",
    answer: "Buddhism",
    options: [
      "Christianity",
      "Tamil",
      "Islam",
      "Buddhism"
    ]
  },
  {
    numb: 8,
    question: "The eighth wonder of the world is?",
    answer: "Sigiriya",
    options: [
      "Sigiriya",
      "Dalada Maligawa",
      "Lotus Tower",
      "One gallface"
    ]
  },
  {
    numb: 9,
    question: "What is the national game of Sri Lanka?",
    answer: "Volleyball",
    options: [
      "Foot Ball",
      "Cricket",
      "Volleyball",
      "Rugby"
    ]
  },
  {
    numb: 10,
    question: "What is the word used in Sri Lanka to greet someone?",
    answer: "Ayubowan",
    options: [
      "Nice to meet you",
      "Ayubowan",
      "Jumbo",
      "Wanakkam"
    ]
  },
];

const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");
// if startQuiz button clicked
start_btn.onclick = ()=>{
  info_box.classList.add("activeInfo"); //show info box
}
// if exitQuiz button clicked
exit_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo"); //hide info box
}
// if continueQuiz button clicked
continue_btn.onclick = ()=>{
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.add("activeQuiz"); //show quiz box
  showQuetions(0); //calling showQestions function
  queCounter(1); //passing 1 parameter to queCounter
  startTimer(15); //calling startTimer function
  startTimerLine(0); //calling startTimerLine function
}
let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");
// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
  quiz_box.classList.add("activeQuiz"); //show quiz box
  result_box.classList.remove("activeResult"); //hide result box
  timeValue = 20;
  que_count = 0;
  que_numb = 1;
  userScore = 0;
  widthValue = 0;
  showQuetions(que_count); //calling showQestions function
  queCounter(que_numb); //passing que_numb value to queCounter
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  startTimer(timeValue); //calling startTimer function
  startTimerLine(widthValue); //calling startTimerLine function
  timeText.textContent = "Time Left"; //change the text of timeText to Time Left
  next_btn.classList.remove("show"); //hide the next button
}
// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
  window.location.reload(); //reload the current window
}
const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
// if Next Que button clicked
next_btn.onclick = ()=>{
  if(que_count < questions.length - 1){ //if question count is less than total question length
    que_count++; //increment the que_count value
    que_numb++; //increment the que_numb value
    showQuetions(que_count); //calling showQestions function
    queCounter(que_numb); //passing que_numb value to queCounter
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    startTimer(timeValue); //calling startTimer function
    startTimerLine(widthValue); //calling startTimerLine function
    timeText.textContent = "Time Left"; //change the timeText to Time Left
    next_btn.classList.remove("show"); //hide the next button
  }else{
    clearInterval(counter); //clear counter
    clearInterval(counterLine); //clear counterLine
    showResult(); //calling showResult function
  }
}
// getting questions and options from array
function showQuetions(index){
  const que_text = document.querySelector(".que_text");
  //creating a new span and div tag for question and option and passing the value using array index
  let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
  let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
  + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
  que_text.innerHTML = que_tag; //adding new span tag inside que_tag
  option_list.innerHTML = option_tag; //adding new div tag inside option_tag

  const option = option_list.querySelectorAll(".option");
  // set onclick attribute to all available options
  for(i=0; i < option.length; i++){
    option[i].setAttribute("onclick", "optionSelected(this)");
  }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';
//if user clicked on option
function optionSelected(answer){
  clearInterval(counter); //clear counter
  clearInterval(counterLine); //clear counterLine
  let userAns = answer.textContent; //getting user selected option
  let correcAns = questions[que_count].answer; //getting correct answer from array
  const allOptions = option_list.children.length; //getting all option items

  if(userAns == correcAns){ //if user selected option is equal to array's correct answer
    userScore += 1; //upgrading score value with 1
    answer.classList.add("correct"); //adding green color to correct selected option
    answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
    console.log("Correct Answer");
    console.log("Your correct answers = " + userScore);
  }else{
    answer.classList.add("incorrect"); //adding red color to correct selected option
    answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
    console.log("Wrong Answer");
    userScore-=2;
    for(i=0; i < allOptions; i++){
      if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
        option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
        option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
        console.log("Auto selected correct answer.");
      }
    }
  }
  for(i=0; i < allOptions; i++){
    option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
  }
  next_btn.classList.add("show"); //show the next button if user selected any option
}
function showResult(){
  info_box.classList.remove("activeInfo"); //hide info box
  quiz_box.classList.remove("activeQuiz"); //hide quiz box
  result_box.classList.add("activeResult"); //show result box
  const scoreText = result_box.querySelector(".score_text");
  if (userScore > 5){ // if user scored more than 3
    //creating a new span tag and passing the user score number and total question number
    let scoreTag = '<span>and congrats! , You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    document.getElementById("qz").style.backgroundColor="rgba(0,255,0,0.2)";
  }
  else{ // if user scored less than 1
    let scoreTag = '<span>and sorry , You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
    scoreText.innerHTML = scoreTag;
    document.getElementById("qz").style.backgroundColor="rgba(255,0,0,0.2)";
  }
}
function startTimer(time){
  counter = setInterval(timer, 1000);
  function timer(){
    timeCount.textContent = time; //changing the value of timeCount with time value
    time--; //decrement the time value
    if(time < 9){ //if timer is less than 9
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero; //add a 0 before time value
    }
    if(time < 0){ //if timer is less than 0
      clearInterval(counter); //clear counter
      timeText.textContent = "Time Off"; //change the time text to time off
      const allOptions = option_list.children.length; //getting all option items
      let correcAns = questions[que_count].answer; //getting correct answer from array
      for(i=0; i < allOptions; i++){
        if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer
          option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
          option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
          console.log("Time Off: Auto selected correct answer.");
        }
      }
      for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
      }
      next_btn.classList.add("show"); //show the next button if user selected any option
    }
  }
}
function startTimerLine(time){
  counterLine = setInterval(timer, 29);
  function timer(){
    time += 1; //upgrading time value with 1
    time_line.style.width = time + "px"; //increasing width of time_line with px by time value
    if(time > 549){ //if time value is greater than 549
      clearInterval(counterLine); //clear counterLine
    }
  }
}
function queCounter(index){
  //creating a new span tag and passing the question number and total question
  let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
  bottom_ques_counter.innerHTML = totalQueCounTag;  //adding new span tag inside bottom_ques_counter
}
var aText = new Array(
  "Sri Lanka is one of the world's most exotic vacation destinations. This island paradise, surrounded by the turquoise Indian Ocean, boasts varied landscapes, miles of golden sandy beaches, and a richness of species and culture to discover. It has eighth UNESCO World Heritage Sites, 15 national parks with incredible wildlife, and approximately 500,000 acres of luscious tea farms. The island is endowed with waterfalls, rivers, jungles, rain forests, and rich grounds suitable for rice cultivation. Sri Lanka is an all-year destination. The greatest season to visit the south-west coast, where the majority of beach resorts are located, is from November to April. From April to September, the old city areas and eastern coastline regions are popular tourist destinations, while the central highlands are popular year-round."
);
var iSpeed = 80; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
  sContents =  ' ';
  iRow = Math.max(0, iIndex-iScrollAt);
  var destination = document.getElementById("typedtext");

  while ( iRow < iIndex ) {
    sContents += aText[iRow++] + '<br />';
  }
  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
  if ( iTextPos++ == iArrLength ) {
    iTextPos = 0;
    iIndex++;
    if ( iIndex != aText.length ) {
      iArrLength = aText[iIndex].length;
      setTimeout("typewriter()", 500);
    }
  } else {
    setTimeout("typewriter()", iSpeed);
  }
}


typewriter();

const rootElement = document.documentElement;
const upToTopBtn = document.getElementById("up-to-top");

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

function showBtn() {
  if (document.body.scrollTop > 100 || rootElement.scrollTop > 100) {
    upToTopBtn.classList.add("active");
  } else {
    upToTopBtn.classList.remove("active");
  }
}

document.addEventListener("scroll", showBtn);
upToTopBtn.addEventListener("click", scrollToTop);

function viewProfile(){
  window.location = "Profile/vinuja.html";
}
function viewProfile_livini(){
  window.location = "Profile/Livini.html";
}