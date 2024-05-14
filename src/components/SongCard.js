import React from "react";
import Rating from "./src/components/Rating";
import PropTypes from "prop-types";

const SongCard = ({data}) => {
    const{thumb,title,artist,rating} = data;
  return <div ClassName="song-card">
    <img src ={thumb} alt={title} ClassName="st-thumb"/>
    <div ClassName = "song-title">
        {title} by {artist}
    </div>
    <Rating stars ={rating}/>
  </div>;
};

SongCard.propTypes = {
    data: PropTypes.shape({
        id:PropTypes.string.isRequired,
        thumb:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
        artist:PropTypes.string.isRequired,
        rating:PropTypes.number.isRequired,
    })
}

export default SongCard;
