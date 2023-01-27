import { shuffleArray } from "./Random"
import { data } from "./apiComponent"

 export function FutureCards(){ 
  
	let future = []
return(
    <div>{
        shuffleArray(data).map((item) =>(
        <img onClick={() =>{future=[] ? (future.push(item[0].id))&&(document.getElementById (item[0].englishName).src=item[0].sakuraCard)
         && (document.getElementById("yourFuture").innerHTML=item[0].meaning): future=[]}} id={item[0].englishName} key={item[0].id} 
         className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>))}
        <h2 className="meaning" id="yourFuture"></h2>
    </div>
    
)}