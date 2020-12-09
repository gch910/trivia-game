import getCluePromise from "./promise-version.js";


// html selection:
const usePromiseButton = document.getElementById("use-promise");
const the_question = document.getElementById("question");
const the_answer = document.getElementById("answer");
const the_value = document.getElementById("value");
const categoryTitle = document.getElementById("category-title");
const invalidCount = document.getElementById("invalid-count");


usePromiseButton.addEventListener("click", event => {

    getCluePromise()
        .then(clueObj => {
            the_question.innerHTML = clueObj.question;
            the_answer.innerHTML = clueObj.answer;
            the_value.innerHTML = clueObj.value;
            categoryTitle.innerHTML = clueObj.category.title;

            if (invalidCount.invalid_count && invalidCount.invalid_count > 0){
                invalidCount.innerHTML = "invalid";
            } else {
                invalidCount.innerHTML = "valid";
            }
        })

        .catch(error => console.log(error));
});
