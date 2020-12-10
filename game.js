import getCluePromise from "./promise-version.js";
import getClueAsync from "./async-await-version.js";
import getClueCallback from "./callback.js";


//html selection:
const usePromiseButton = document.getElementById("use-promise");
const useAsyncButton = document.getElementById("use-async-await");
const the_question = document.getElementById("question");
const the_answer = document.getElementById("answer");
const the_value = document.getElementById("value");
const categoryTitle = document.getElementById("category-title");
const invalidCount = document.getElementById("invalid-count");
const useCallbackButton = document.getElementById("use-callback");
const checkResponse = document.getElementById("check-response");
const playerResponse = document.getElementById("player-response");
const their_score = document.getElementById("score");



function updateValues(clueObj) {
  the_question.innerHTML = clueObj.question;
  the_answer.innerHTML = clueObj.answer;
  the_value.innerHTML = clueObj.value;
  categoryTitle.innerHTML = clueObj.category.title;

  if (invalidCount.invalid_count && invalidCount.invalid_count > 0) {
    invalidCount.innerHTML = "invalid";
  } else {
    invalidCount.innerHTML = "valid";
  }
}

usePromiseButton.addEventListener("click", (event) => {
  getCluePromise()
    .then((clueObj) => updateValues(clueObj))
    .catch((error) => console.log(error));
});

useAsyncButton.addEventListener("click", async () => {
  try {
    const result = await getClueAsync();
    updateValues(result);
  } catch (error) {
    console.log(error);
  }
});





useCallbackButton.addEventListener("click", () => {

  getClueCallback(function(error, clue){
    if(error !== null) return console.error(error);
    updateValues(clue);
  });

});





checkResponse.addEventListener("click", () => {
  let numberVal = Number(the_value.innerHTML);
  let numberScore = Number(their_score.innerHTML);

  if (playerResponse.value === the_answer.innerHTML){
    their_score.innerHTML = `${numberScore + numberVal}`;
  } else {
    their_score.innerHTML = `${numberScore - numberVal}`;
  }

  the_answer.classList.remove("is-hidden");
  checkResponse.classList.add("is-hidden");

});
