import React from 'react';

export const QuoteBox = (props) => {
  let twitterLink = 'https://twitter.com/intent/tweet?text=' + props.quote + ' - ' + props.author;
  let tumblr = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='+encodeURIComponent(props.author)+'&content=' + encodeURIComponent(props.quote)+'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  return (
      <div>
        <p id="text"><i className="fa fa-quote-left"></i>{props.quote}</p>
        <p id="author">- {props.author}</p>
        <div id="social-buttons">
          <a href={twitterLink} className="button" id="tweet-quote"><i className="fa fa-twitter"></i></a>
          <a href={tumblr} className="button" id="tumblr-quote"><i className="fa fa-tumblr"></i></a>
        </div>
      </div>
  )
}

export default QuoteBox;