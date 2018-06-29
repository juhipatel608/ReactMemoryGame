//dependencies
import React, { Component } from "react";
import Score from "./components/Score";
import Instructions from "./components/Instructions";
import Flowercard from "./components/Flowercard";
import flower from "./flower.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    flower,
    clickedFlower: [],
    score: 0
  };

//when you click on a card ... the flower is taken out of the array
  imageClick = event => {
    const currentFlower = event.target.alt;
    const FlowerAlreadyClicked =
      this.state.clickedFlower.indexOf(currentFlower) > -1;

//if you click on a flower that has already been selected, the game is reset and cards reordered
    if (FlowerAlreadyClicked) {
      this.setState({
        flower: this.state.flower.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedFlower: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available flower, your score is increased and cards reordered
    } else {
      this.setState(
        {
          flower: this.state.flower.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedFlower: this.state.clickedFlower.concat(
            currentFlower
          ),
          score: this.state.score + 1
        },
//if you get all 12 flower corrent you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              flower: this.state.flower.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedFlower: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: Score, Instructions, FlowerCard, footer 
  render() {
    return (
      <div>
        <Instructions />
        <div className="wrapper">
          {this.state.flower.map(flower => (
            <Flowercard
              imageClick={this.imageClick}
              id={flower.id}
              key={flower.id}
              image={flower.image}
            />
          ))}
        </div>
        <Score 
          score={this.state.score}
        />
        
      </div>
    );
  }
}
export default App;