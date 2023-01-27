import { shuffleArray } from "./Random"
import { data } from "./apiComponent"

 export function PresentCards(){ 
   let present = []
return(
    <div>{
        shuffleArray(data).map((item) => (	
            <img onClick={() => {present=[] ? (present.push(item[0].id))&&(document.getElementById (item[0].spanishName).src=item[0].sakuraCard) 
                && (document.getElementById("yourPresent").innerHTML=item[0].meaning) : present=[]}} id={item[0].spanishName} key={item[0].id} 
                className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>		
            ))}
    <h2 className="meaning" id="yourPresent"></h2>
    </div>
    
)}