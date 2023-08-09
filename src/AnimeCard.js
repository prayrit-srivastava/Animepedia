import { Component } from "react";

// Complete the AnimeCard Component
class AnimeCard extends Component {
  render() {
    return <div className="anime-card">
      <img src = {this.props.src} role="img"></img>
      <p>{this.props.about}</p>
    </div>;
  }
}

export default AnimeCard;
