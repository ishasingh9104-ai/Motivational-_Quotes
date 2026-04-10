async function getQuote() {

let quoteElement = document.getElementById("quote");
let authorElement = document.getElementById("author");

quoteElement.innerText = "Loading Josh...";
authorElement.innerText = "";

try {

let response = await fetch("https://dummyjson.com/quotes/random");

let data = await response.json();

quoteElement.innerText = `"${data.quote}"`;
authorElement.innerText = "🏆 " + data.author;

} 

catch (error) {

quoteElement.innerText = "Better luck next time!";
authorElement.innerText = "";

}

}



function copyQuote(){

let quote = document.getElementById("quote").innerText;
let author = document.getElementById("author").innerText;

navigator.clipboard.writeText(quote + " " + author);

alert("🔥 Your today's Josh is filled!");

}
function uploadQuote(){

let text = document.getElementById("userQuote").value;

if(text === ""){

alert("Please write a quote first!");
return;

}



localStorage.setItem("userQuote", text);



alert("✅ Successfully uploaded!");



document.getElementById("userQuote").value="";

}