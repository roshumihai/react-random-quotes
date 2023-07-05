import React, { Component } from 'react'



class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            message: "",
            author: "",
        }
        this.getNewMessage();
        this.handleChange = this.handleChange.bind(this)
        this.getNewMessage = this.getNewMessage.bind(this)
    }

    getNewMessage() {
        const app = this;
        fetch('https://type.fit/api/quotes')
        .then((response) => response.json())
        .then((data) => {
            let index = Math.floor(Math.random() * data.length);
            app.setState({
                message: data[index].text,
                author: "- " + data[index].author
            })
        })
    }
    handleChange() {
        this.getNewMessage();
    }



    render() {
        return (
            <div id="quote-box">
                <p id="text">{this.state.message}</p>
                <p id="author-quote">{this.state.author}</p>
                <a id="tweet-quote" href="#" target="_blank">
                    <img id="tweet-img" src="https://www.iconninja.com/files/383/986/347/tweeting-tweet-twitter-bird-logo-icon.png" />
                </a>
                <button id="new-quote" onClick={this.handleChange}>New quote</button>
            </div>
        )
    }
}

export default Welcome