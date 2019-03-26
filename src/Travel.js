import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.capital} />
    <figcaption>
      <blockquote>{props.quote}</blockquote>
      <cite>{props.capital}</cite>
    </figcaption>
  </figure>
);

export default Travel;