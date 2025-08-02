 const quotes = [
      { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
      { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
      { text: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
      { text: "Whether you think you can, or you think you can’t – you’re right.", author: "Henry Ford" },
      { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
      { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
      { text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
      { text: "Don’t count the days, make the days count.", author: "Muhammad Ali" },
      { text: "Twenty years from now you will be more disappointed by the things you didn’t do than by the ones you did do.", author: "Mark Twain" },
      { text: "The most difficult thing is the decision to act, the rest is merely tenacity.", author: "Amelia Earhart" },
      { text: "Imagination is more important than knowledge. For knowledge is limited, whereas imagination embraces the entire world.", author: "Albert Einstein" },
      { text: "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", author: "Jimmy Dean" },
      { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" }
    ];

    const quoteText = document.getElementById("quote");
    const quoteAuthor = document.getElementById("author");
    const newQuoteBtn = document.getElementById("newQuoteBtn");

    function showNewQuote() {
      const quoteGenrator = Math.floor(Math.random() * quotes.length);
      quoteText.innerText = quotes[quoteGenrator].text;
      quoteAuthor.innerText = "- " + quotes[quoteGenrator].author;
    }
    

    newQuoteBtn.addEventListener("click", showNewQuote);

    showNewQuote();