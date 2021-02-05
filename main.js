const newQuoteButton = document.getElementById('js-new-quote');
const quote_url = "https://api.quotable.io/random"
const quote_text = document.getElementById('quote-text')
const rand_number = Math.floor(Math.random() * 1643).toString();
if (newQuoteButton != null) {
    newQuoteButton.addEventListener('click', getQuote);
}
const url = "https://api.quotable.io/random";
function getQuote()
{
   fetch(url)
  .then(function(data) {
         return data.json();
    })
    .then(function(data){    
    document.getElementById("quote-text").innerHTML = data.content; document.querySelector("#author").innerHTML = "- " + data.author;
   })
 .catch(function(err) {
    console.log(err); 
    });
}

