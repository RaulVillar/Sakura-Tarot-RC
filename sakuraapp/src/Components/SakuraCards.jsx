import React from "react";
import '../index.css'
import { Header } from "./Header"
import { Footer } from "./Footer"
import { PastCards } from "./Past";
import { PresentCards } from "./Present"
import { FutureCards } from "./Future"

let sakuraUrl = " https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/";

export class Api extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			items: [],
			DataisLoaded: false,
		};
	}

	componentDidMount() {
		fetch(sakuraUrl)
			.then((response) => response.json())
			.then((json) => {
				this.setState({
					items: json,
					DataisLoaded: true,
					
				});
			})
	}

	
	render() {	
		const { DataisLoaded, items} = this.state;
		if (!DataisLoaded) return
		<div>
			<h1> Please wait some time.... </h1>
		</div>;

		return (
			<div className="sakuraCards">
				<Header />
				<hr className="sakuraCards-line" />
				<div>
					<h2 className="sakuraCards-title">Pasado</h2>
				<PastCards />	
				</div>
				<div>
					<h2 className="sakuraCards-title">Presente</h2>
				<PresentCards />
				</div>
				<div>
					<h2 className="sakuraCards-title">Futuro</h2>
				<FutureCards />
				</div>
				
				<Footer />
			</div>
		);
	}
}

