import './App.css';
import React from 'react';

const styles= {
  transition: "all 1s"
}

const quoteBank = [
  {
    quote: "In the fields of observation chance favors only the prepared mind.",
    author: "Louis Pasteur"
  },
  {
    quote: "Let me tell you the secret that has led me to my goal. My strength lies solely in my tenacity.",
    author: "Louis Pasteur"
  },
  {
    quote: "Do not let yourself be tainted with a barren skepticism.",
    author: "Louis Pasteur"
  },
  {
    quote: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
    author: "Louis Pasteur"
  },
  {
    quote: "When I approach a child, he inspires in me two sentiments; tenderness for what he is, and respect for what he may become.",
    author: "Louis Pasteur"
  },
  {
    quote: "Never interrupt your enemy when he is making a mistake.",
    author: "Napoleon Bonaparte",
  },
  {
    quote: "The reward for work well done is the opportunity to do more.",
    author: "Jonas Salk"
  },
  {
    quote: "Mars is there, waiting to be reached.",
    author: "Buzz Aldrin"
  },
  {
    quote: "I see Earth! It is so beautiful.",
    author: "Yuri Gagarin"
  },
  {
    quote: "Three things cannot be long hidden: the sun, the moon, and the truth.",
    author: "Siddhartha Guatama"
  },
  {
    quote: "There is nothing on this earth more to be prized than true friendship.",
    author: "Thomas Aquinas"
  },
  {
    quote: "Personally, I rather look forward to a computer program winning the world chess championship. Humanity needs a lesson in humility.",
    author: "Richard Dawkins"
  },
  {
    quote: "The essence of life is statistical improbability on a colossal scale.",
    author: "Richard Dawkins"
  },
  {
    quote: "Somewhere, something incredible is waiting to be known.",
    author: "Carl Sagan"
  },
  {
    quote: "I prayed for twenty years but received no answer until I prayed with my legs.",
    author: "Frederic Douglass"
  },
  {
    quote: "People are trapped in history and history is trapped in them.",
    author: "James Baldwin"
  },
  {
    quote: "Love takes off masks that we fear we cannot live without and know we cannot live within.",
    author: "James Baldwin"
  }
];

//beautiful general colors
const bgc = [
  '#E27D60',
  '#85DCB',
  '#E8A87C',
  '#C38D9E',
  '#41B3A3',
  '#05386B',
  '#379683',
  '#FC444F',
  '#282828',
  '#3500D3',
  '#190061',
  '#9A1750',
  '#EE4C7C',
  '#D79922',
];
const tweetTemplate = 'https://twitter.com/intent/tweet?text=';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      quoteText: 'Quote Text here',
      quoteAuthor: 'Author Name here',
      quoteTweet: '',
      bgColor: ''
    }

    this.fetchNewQuoteAndAuthor = this.fetchNewQuoteAndAuthor.bind(this);
    this.buildTweetLink = this.buildTweetLink.bind(this);
  }

  componentDidMount() {
    this.fetchNewQuoteAndAuthor();
  }

  buildTweetLink(nqa) {
    return (tweetTemplate+quoteBank[nqa].quote.split(' ').join('%20') + '%0A' + quoteBank[nqa].author.split(' ').join('%20') + '%20%23quote')
  }

  fetchNewQuoteAndAuthor() {
    var newQnA = Math.floor(Math.random() * (quoteBank.length));
    var newColor = Math.floor(Math.random() * (bgc.length));
    this.setState(
      {
      quoteText: quoteBank[newQnA].quote,
      quoteAuthor: quoteBank[newQnA].author,
      quoteTweet: this.buildTweetLink(newQnA),
      bgColor: bgc[newColor]
      //quoteTweet: tweetTemplate + quoteBank[newQnA].quote.split(' ').join('%20') + '%0A' + quoteBank[newQnA].author.split(' ').join('%20') + '%20%23quote'
      }
    );

  } 


  render() {

    return (
      <div id="bg" style={{...styles, "background-color": this.state.bgColor}}>
        <div className="App" id="quote-box" style={{...styles, "color": this.state.bgColor}}>
          <p id="text">
            {this.state.quoteText}
          </p>

          <h6 id="author" >
            {this.state.quoteAuthor}
          </h6>

          <button id="new-quote" style= {{"background-color": this.state.bgColor}} onClick={this.fetchNewQuoteAndAuthor} >New Quote</button>

          <a href={this.state.quoteTweet} target="_blank" rel="noreferrer" id="tweet-quote">Tweet Quote</a>
        </div>
        <br />
        <h5 id="signature" style={{...styles, "color": this.state.bgColor}}>
          By Lucas
        </h5>
      </div>
    );
  }
}

export default App;
