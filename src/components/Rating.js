import React from "react";
import PropTypes from "prop-types";

const Rating = ({stars}) => {
  return <div ClassName = "rating">
  {[...new Array(Math.round(stars <= 5 ? stars : 0)).keys()].map(s=> (<div ClassName="star" key={s}/>))}
  </div>;
};

Rating.propTypes = {
    stars: PropTypes.number.isRequired
}
export default Rating;
