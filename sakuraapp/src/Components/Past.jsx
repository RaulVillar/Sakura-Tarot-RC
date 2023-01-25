import { shuffleArray } from "./Random";


export class PastCard extends React.Component {

  render() {
    return (
        <div className = "Past_Cards">
        <h2>Pasado</h2>
        {	
        shuffleArray(items).map((item) => (
                <img key={item[0].id} class="cards-img" src={item[0].sakuraCard}></img>))}	
    </div>
    )
  }
}

export default PastCard
