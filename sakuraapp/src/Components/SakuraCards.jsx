import React from "react";
import '../index.css'
import { shuffleArray } from "./Random"
import { Header } from "./Header"
import { Footer } from "./Footer"

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
					{
						shuffleArray(items).map((item) => (
						<img onClick={() =>{(document.getElementById (item[0].id).src=item[0].sakuraCard) && (document.getElementById("yourPast").innerHTML=item[0].meaning)}} id={item[0].id} key={item[0].id} className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>
					  ))}
						<h2 id="yourPast"></h2>
				</div>
				<div>
					<h2 className="sakuraCards-title">Presente</h2>
					{
						shuffleArray(items).map((item) => (
							
						<img onClick={() => {(document.getElementById (item[0].spanishName).src=item[0].sakuraCard) && (document.getElementById("yourPresent").innerHTML=item[0].meaning)}} id={item[0].spanishName} key={item[0].id} className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>		
						))}
					<h2 id="yourPresent"></h2>	
				</div>
				<div>
					<h2 className="sakuraCards-title">Futuro</h2>
					{
						shuffleArray(items).map((item) => (
						<img onClick={() => (document.getElementById (item[0].englishName).src=item[0].sakuraCard) && (document.getElementById("yourFuture").innerHTML=item[0].meaning)} id={item[0].englishName} key={item[0].id} className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>))}
						<h2 id="yourFuture"></h2>
				</div>
				
				<Footer />
			</div>
		);
	}
}

