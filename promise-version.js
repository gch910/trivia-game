const url = "https://jservice.xyz/api/random-clue";


function getCluePromise() {
 return fetch(url).then((res) => {
    // console.log(res);
    if (!res.ok) {
      throw new Error(res.status);
    } else {
      return res.json();
    }
  });

  //     .json());
  // .then(json => )
}

document.addEventListener("DOMContentLoaded", () => {
  getCluePromise();
});



export default getCluePromise;
