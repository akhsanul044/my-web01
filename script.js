const text = [
  "● M AKHSANUL ROZIKIN",
  "● TEKNIK KOMPUTER DAN JARINGAN",
  "● SMKN 1 NGLEGOK",
  "● STUDENT OF TKJ"
];

let index = 0;

setInterval(() => {

  document.getElementById("status").innerText =
  text[index];

  index++;

  if(index >= text.length){
    index = 0;
  }

}, 2000);