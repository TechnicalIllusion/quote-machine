import React, { Component } from 'react';
import axios from 'axios';
import { QuoteBox } from './QuoteBox';
import './App.css';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            quote: {}
        }
    }

    getQuote = async () => {
        await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then((res) => {
                let randomIndex = Math.floor(Math.random() * 102);
                this.setState({
                    quote: res.data.quotes[randomIndex]
                })
            }
        )
    }

    handleClick = async (e) => {
        e.preventDefault();
        await this.getQuote();
    }

    componentDidMount() {
        this.getQuote();
    }

    render() {
        return (
            <div className="center">
                <div className="App" id="wrapper">
                    <div id="quote-box">
                        <QuoteBox quote={this.state.quote.quote} author={this.state.quote.author}/>
                        <a id="new-quote" href="/" onClick={this.handleClick} target="_blank">New quote</a>
                    </div>
                </div>    
            </div>
        )
    }
}

export default App;