const quoteget = document.getElementById("quote");
const auth = document.getElementById("author");
const button = document.getElementById("generate-btn");

const gradients = [
    "linear-gradient(135deg, #667eea, #764ba2)",
    "linear-gradient(135deg, #11998e, #38ef7d)",
    "linear-gradient(135deg, #fc466b, #3f5efb)",
    "linear-gradient(135deg, #f7971e, #ffd200)",
    "linear-gradient(135deg, #00c6ff, #0072ff)"
];

const API_QUOTE = "https://dummyjson.com/quotes/random";

async function getQuote() {

    try{
        quoteget.textContent = "loading..";
        quoteget.textContent = "";

        const response = await fetch(API_QUOTE);
        const randomindx =  Math.floor(Math.random()*gradients.length);//.floor changes decimal to int, .random choce decimal number
                                                                        // from 0 to 1
        document.body.style.background = gradients[randomindx];// it is DOM TO chng ethe css
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