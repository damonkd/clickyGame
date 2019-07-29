import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import ImageCard from "./components/imagecard";
import Footer from "./components/Footer";
import drs from "./drs.json";
import "./App.css";



class App extends Component {

  state = {
    drs,
    clickedCharacters: [],
    score: 0
  };


  imageClick = event => {
    const currentCharacter = event.target.alt;
    const characterAlreadyClicked =
      this.state.clickedCharacters.indexOf(currentCharacter) > -1;


    if (characterAlreadyClicked) {
      this.setState({
        drs: this.state.drs.sort(function (a, b) {
          return Math.random() - 0.5;
        }),

        clickedCharacters: [],
        score: 0
      });
      alert("Already picked, Try Again");



    } else {
      this.setState(
        {
          drs: this.state.drs.sort(function (a, b) {
            return 0.5 - Math.random();
          }),


          clickedCharacters: this.state.clickedCharacters.concat(
            currentCharacter
          ),
          score: this.state.score + 1
        },
        () => {


          if (this.state.score === 12) {

            alert("Winner!");
            this.setState({
              drs: this.state.drs.sort(function (a, b) {
                return 0.5 - Math.random();
              }),

              clickedCharacters: [],
              score: 0
            });
          }
        }
      );
    }
  };


  //Map over this.state.stars and render a ImageCard component for each stars object
  render() {
    return (
      <div>
        <Navbar
          score={this.state.score} />
        <Jumbotron />
        <div className="wrapper">
          {this.state.drs.map(drs => (


            <ImageCard
              imageClick={this.imageClick}
              id={drs.id}
              key={drs.id}
              name={drs.name}
              image={drs.image}
            />


          ))}
        </div>
        <Footer />
      </div>
    );
  }
}



export default App;