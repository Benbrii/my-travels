import React from "react";

const Travel = props => (
  <figure>
    <img src={props.image} alt={props.character} />
    <figcaption>
      <blockquote>{props.quote}</blockquote>
      <cite>{props.character}</cite>
    </figcaption>
  </figure>
);

export default Travel;