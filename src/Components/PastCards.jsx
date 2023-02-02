import { shuffleArray } from "./ShuffleCards"
import { data } from "./ApiFetch"

export function PastCards() {

    let past = []
    return (
        <div className="sakuraCards-box">{
            shuffleArray(data).map((item) => {
                return (<img onClick={() => {
                    if (past.length < 1) {
                        past.push(item[0].id)
                        document.getElementById(item[0].id).src = item[0].sakuraCard
                        document.getElementById("yourPast").innerHTML = item[0].meaning
                    }
                }}
                    id={item[0].id} key={item[0].id} className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>)
            })}
            <h2 className="meaning" id="yourPast"></h2>
        </div>
    )
}
