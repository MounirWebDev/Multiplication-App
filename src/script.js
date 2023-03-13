// creation of variables
const score_number = document.getElementById("score_number");
const random_number1 = document.getElementById("random_number1");
const random_number2 = document.getElementById("random_number2");
const true_false = document.getElementsByClassName("bi");
const loss = document.getElementById("nbr_loss");
const profit = document.getElementById("nbr_profit");
const reset = document.getElementById("resetBtn")
// edit the numbers random
random_number1.innerHTML = Math.floor(Math.random() * 10) + 1;
random_number2.innerHTML = Math.floor(Math.random() * 10) + 1;

function check_answer() {
  const answer = document.getElementById("answer").value;
  let result = random_number1.innerHTML * random_number2.innerHTML;
  // check the result
  if (answer == result) {
    score_number.innerHTML = parseInt(score_number.innerHTML) + 1;
    random_number1.innerHTML = Math.floor(Math.random() * 10) + 1;
    random_number2.innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("answer").value = "";
    // change a color of the body
    document.getElementById("body").style.backgroundColor = "#06c200";
    // the profit
    profit.innerHTML = parseInt(profit.innerHTML) + 1;
  } else {
    score_number.innerHTML = parseInt(score_number.innerHTML) - 1;
    random_number1.innerHTML = Math.floor(Math.random() * 10) + 1;
    random_number2.innerHTML = Math.floor(Math.random() * 10) + 1;
    document.getElementById("answer").value = "";
    // change a color of the body
    document.getElementById("body").style.backgroundColor = "#ff0800"
    // the loss
    loss.innerHTML = parseInt(loss.innerHTML) + 1;
  }
  //check nomber of the score and change his color
  let div_score = document.getElementById("score");
  let p_score = div_score.getElementsByTagName("p");
  if (score_number.innerHTML > 0) {
    for (let i = 0; i < p_score.length; i++) {
      p_score[i].style.color = "#046b00";
    }
  } else if (score_number.innerHTML < 0) {
    for (let i = 0; i < p_score.length; i++) {
      p_score[i].style.color = "#960500";
    }
  } else {
    for (let i = 0; i < p_score.length; i++) {
      p_score[i].style.color = "#000";
    }
  }
  //Put The Score, The Profit And The Profit In The Session Storage
  window.localStorage.setItem('score', score_number.innerHTML)
  window.localStorage.setItem('profit', profit.innerHTML)
  window.localStorage.setItem('loss', loss.innerHTML)
}
if(window.localStorage.getItem('score')){
  score_number.innerHTML = window.localStorage.getItem('score');
  loss.innerHTML = window.localStorage.getItem('loss');
  profit.innerHTML = window.localStorage.getItem('profit');
}

// Reset
reset.addEventListener('click', ()=>{
  score_number.innerHTML = 0
  profit.innerHTML = 0
  loss.innerHTML = 0
  window.localStorage.clear()
})