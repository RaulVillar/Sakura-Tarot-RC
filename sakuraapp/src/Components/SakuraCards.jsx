import React from "react";
import '../index.css'
import { shuffleArray } from "./Random"

let sakuraUrl = " https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export class Api extends React.Component {

	// Constructor
	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false
		};
	}

	// ComponentDidMount is used to
	// execute the code
	componentDidMount() {
		fetch(sakuraUrl)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true
				
					
				});
			})
	}
	render() {
		const { DataisLoaded, items } = this.state;
		if (!DataisLoaded) return 
		<div>
			<h1> Please wait some time.... </h1> 
		</div> ;

		return (
		<div className = "App">
			<h2> Las cartas del fuuutuuurooooo </h2>
			{	
			shuffleArray(items).map((item) => (
					<img key={item[0].id} class="cards-img" src={item[0].sakuraCard}></img>))}	
		</div>
		
		);}
	}
