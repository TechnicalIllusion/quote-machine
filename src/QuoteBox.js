import React from 'react';

export const QuoteBox = (props) => {
  const { quote, author } = props;
  const twitterLink = 'https://twitter.com/intent/tweet?text=' + quote + ' - ' + author;
  const tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(author)+'&content=' + encodeURIComponent(quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  return (
      <div>
        <p id="text"><i className="fa fa-quote-left"></i>{quote}</p>
        <p id="author">- {author}</p>
        <div id="social-buttons">
          <a href={twitterLink} className="button" id="tweet-quote" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
          <a href={tumblr} className="button" id="tumblr-quote" target="_blank" rel="noopener noreferrer"><i className="fa fa-tumblr"></i></a>
        </div>
      </div>
  )
}

export default QuoteBox;