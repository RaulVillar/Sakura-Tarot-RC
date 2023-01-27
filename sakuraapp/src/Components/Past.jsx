import { shuffleArray } from "./Random"
import { data } from "./apiComponent"

 export function PastCards(){ 
  
	let past = []
return(
    <div>{
    shuffleArray(data).map((item) => (
    <img onClick={() =>{past=[] ? (past.push(item[0].id)) && (document.getElementById (item[0].id).src=item[0].sakuraCard) 
        && (document.getElementById("yourPast").innerHTML=item[0].meaning) : past=[]}}
     id={item[0].id} key={item[0].id} className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>))}
    <h2 className="meaning"id="yourPast"></h2>
    </div>
    
)}

console.info(data)
