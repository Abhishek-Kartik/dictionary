const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");

const getWordInfo = async (word) => {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();
    // console.log(data[0].meanings[0].definitions[0].definition);
    resultDiv.innerHTML = `
  <p><b><i>Word : </i></b>${data[0].word}</p>
  <p><b><i>PartOFSpeech : </i></b>${data[0].meanings[0].partOfSpeech}</p>
  <p><b><i>Meaning : </i></b>${
    data[0].meanings[0].definitions[0].definition === undefined
      ? "Not found"
      : data[0].meanings[0].definitions[0].definition
  }</p>
  `;

    resultDiv.innerHTML += `<a href="${data[0].sourceUrls}" target="_blank">Read More</a>`;
  } catch (error) {
    resultDiv.innerHTML= `<p> Sorry, the word could not be found</p>`
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  getWordInfo(form.elements[0].value);
});
