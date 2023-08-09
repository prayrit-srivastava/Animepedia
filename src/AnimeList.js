import { Component } from "react";
import AnimeCard from './AnimeCard';

// Complete the AnimeList Component
class AnimeList extends Component {

  render() {
    let anime = this.props.anime;
    return <div className="anime-list">
      {anime.map((ani,index)=>{
        return <AnimeCard key = {index} src={ani.image} about={ani.name}/>
      })}
    </div>;
  }
}

export default AnimeList;
