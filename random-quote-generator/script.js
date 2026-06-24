const quoteget = document.getElementById("quote");
const auth = document.getElementById("author");
const button = document.getElementById("generate-btn");

const API_QUOTE = "https://dummyjson.com/quotes/random";

async function getQuote() {

    try{
        quoteget.textContent = "loading..";
        quoteget.textContent = "";

        const response = await fetch(API_QUOTE);
        if(!response.ok){
            throw new Error ("Failed to fetch the quote");
        }
        const data = await response.json();
        quoteget.textContent = `${data.quote}`;
        auth.textContent = `- ${data.author}`;
    } catch(error){
        quoteget.textContent = "Something went wrong";
        auth.textContent = "";
        console.log(error);
    }
    
}

button.addEventListener("click",getQuote);

getQuote();