import React, { Component } from "react";
import Troll from './U-Mad-Bro.png'

export default class Meme extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      defaultImg: "https://i.imgflip.com/1bij.jpg",
      allImgs: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then(response => response.json())
      .then(data => {
        let APIData = data.data.memes;
        console.log(APIData);
        this.setState({
          allImgs: APIData
        });
      });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    /* stop submit refresh */
    e.preventDefault();
    /* random number from our API returned array within the length of our array */
    let arrNumber = Math.floor(Math.random() * this.state.allImgs.length);
    let apiURL = this.state.allImgs[arrNumber].url;
    console.log(apiURL);
    /* updating default image with what obtained from apiURL  */
    this.setState({
      defaultImg: apiURL
    });
  }

  render() {
    return (
      <div>
        <div>
          <header>
            <img
              src={Troll}
              style={{width:'100px', height: '100px', marginTop: '20px'}}
              alt="!!"
            />
          </header>
        </div>

        <div className="mainCont">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              name="topText"
              value={this.state.topText}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="bottomText"
              value={this.state.bottomText}
              onChange={this.handleChange}
            />
            <button>generate</button>
          </form>

          <div className="memeTxtCont">
            <p>
              <span className="imgCont">
                <h2>{this.state.topText}</h2>
                <img src={this.state.defaultImg} alt="?" />
                <h2>{this.state.bottomText}</h2>
              </span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
