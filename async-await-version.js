const url = "https://jservice.xyz/api/random-clue";
async function getClueAsync() {
  const response = await fetch(url);
  if(!response.ok) {
      throw new Error(response.status)
  } else {
      return await response.json();
  }

}






export default getClueAsync;