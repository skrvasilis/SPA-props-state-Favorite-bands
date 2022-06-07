import React, { Component } from "react";
import "./App.css";
import Bands from "./components/Bands";
import Form from "./components/Form";
import Header from "./components/Header";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bands: [
        {
          name: "The Beatles",
          greatestHit: "I Want To Hold Your Hand",
          genre: "Rock",
          image: "https://i.ytimg.com/vi/jo505ZyaCbA/maxresdefault.jpg",
        },
        {
          name: "Nirvana",
          greatestHit: "Come As You Are",
          genre: "Grunge",
          image: "http://www.laut.de/Nirvana/nirvana-161495.jpg",
        },
        {
          name: "The Doors",
          greatestHit: "Light my Fire",
          genre: "Psychedellic rock",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/6/69/The_Doors_1968.JPG",
        },
      ],
      userInputs: {
        name: "",
        greatestHit: "",
        genre: "",
        image: "",
      },
      display: "form",
    };
  }

  handleInputs(e) {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({
      userInputs: { ...this.state.userInputs, [e.target.name]: e.target.value },
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ bands: [...this.state.bands, this.state.userInputs] });
    this.setState({ userInputs: {} });
    this.setState({ display:"bands" });
  }

  handleDisplay(str) {
    this.setState({ display: str });
  }

  render() {
    return (
      <div className="app">
        <Header handleDisplay={this.handleDisplay.bind(this)} />
        {this.state.display === "form" ? (
          <Form
            handleInputs={this.handleInputs.bind(this)}
            handleSubmit={this.handleSubmit.bind(this)}
          />
        ) : (
          <Bands bands={this.state.bands} />
        )}
      </div>
    );
  }
}
