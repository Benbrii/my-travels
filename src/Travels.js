import React from "react";
import Travel from "./Travel";

const travels = [
    {
      quote:
        "Lisbonne, capital du Portugal",
      capital: "Lisbon",
      image:
        "http://www.voyageplus.net/vil_po1200.jpg"
    },
    {
      quote: "Paris, capital de la France",
      character: "Paris",
      image:
        "http://www.voyageplus.net/vil_fr0070.jpg"
    },
    {
      quote: "Londres, capital du Royaume-Uni",
      character: "Londres",
      image:
        "http://www.voyageplus.net/vil_ru0289.jpg"
    },
    {
      quote:
        "Tokyo, capital du Japon",
      character: "Tokyo",
      image:
        "http://www.voyageplus.net/vil_ja1145.jpg"
    }
  ];
  
  const Travels = () => (
    <div>
      {travels.map(quote => (
    <Travel quote={quote.quote} image={quote.image} character={quote.capital} />)
      )}
    </div>
  );
  
  export default Travels;