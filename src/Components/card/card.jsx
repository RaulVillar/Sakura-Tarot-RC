import "./card.css";
import "./flip-transition.css";

function Card({onClick}) {
  return (
    <div className="card" onClick={onClick}>
      <img className="card-back"/>
      <img className="card-front" src={this.props.cardSakura}/>
    </div>
  );
}

export default Card;