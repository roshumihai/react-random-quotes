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
                
                <h1 className='profiles'>My Social Media Profiles</h1>
                <ul className='ul-profiles'>
                    <li><a href="https://www.facebook.com/profile.php?id=100009359224502" target="_blank">Facebook</a></li>
                    <li><a href="https://www.instagram.com/rosu.mihai/" target="_blank">Instagram</a></li>
                    <li><a href="https://github.com/roshumihai" target="_blank">GitHub</a></li>
                    <li><a href="linkedin.com/in/mihai-rosu-4bba5456" target="_blank">Linkedin</a></li>
                </ul>
                <button id="new-quote" onClick={this.handleChange}>New quote</button>
            </div>
        )
    }
}

export default Welcome