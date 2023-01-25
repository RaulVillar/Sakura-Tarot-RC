import React from "react";
import { shuffleArray } from "./Random";

export class present extends React.Component {
  render() {
    return (
		<div className = "present_cards">
			<h2>Presente</h2>
			{	
			shuffleArray(items).map((item) => (
					<img key={item[0].id} className="cards-img" src={item[0].sakuraCard}></img>))}		
		</div>
		)
  }
}



