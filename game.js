import getCluePromise from "./promise-version.js";
import getClueAsync from "./async-await-version.js";

//html selection:
const usePromiseButton = document.getElementById("use-promise");
const useAsyncButton = document.getElementById("use-async-await");
const the_question = document.getElementById("question");
const the_answer = document.getElementById("answer");
const the_value = document.getElementById("value");
const categoryTitle = document.getElementById("category-title");
const invalidCount = document.getElementById("invalid-count");

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

//   the_question.innerHTML = clueObj.question;
//   the_answer.innerHTML = clueObj.answer;
//   the_value.innerHTML = clueObj.value;
//   categoryTitle.innerHTML = clueObj.category.title;

//   if (invalidCount.invalid_count && invalidCount.invalid_count > 0) {
//     invalidCount.innerHTML = "invalid";
//   } else {
//     invalidCount.innerHTML = "valid";
//   }

 // the_question.innerHTML = result.question;
    // the_answer.innerHTML = result.answer;
    // the_value.innerHTML = result.value;
    // categoryTitle.innerHTML = result.category.title;
    // if (invalidCount.invalid_count && invalidCount.invalid_count > 0) {
    //     invalidCount.innerHTML = "invalid";
    //   } else {
    //     invalidCount.innerHTML = "valid";
    //   }
