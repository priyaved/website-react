import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these Beautiful Destinations !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/1.jpg"
              text="Explore the hidden waterfalls of the Amazon"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src="images/2.jpg"
              text="Explore the serenity of Nature"
              label="Relax"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/nine_village_valley.jpg"
              text="Enjoy the silences of the Sea"
              label="Relax"
              path="/services"
            />
             <CardItem
              src="images/scandinavian_beauty.jpg"
              text="Enjoy the colourful City Life"
              label="Relax"
              path="/services"
            />
           
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
