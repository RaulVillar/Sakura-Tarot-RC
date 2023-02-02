import { shuffleArray } from "./ShuffleCards"
import { data } from "./ApiFetch"

export function PresentCards() {

    let present = []
    return (
        <div className="sakuraCards-box">{
            shuffleArray(data).map((item) => {
                return (<img onClick={() => {
                    if (present.length < 1) {
                        present.push(item[0].id)
                        document.getElementById(item[0].spanishName).src = item[0].sakuraCard
                        document.getElementById("yourPresent").innerHTML = item[0].meaning
                    }
                }}
                    id={item[0].spanishName} key={item[0].id} className="cards-img" src={item[0].cardsReverse.sakuraReverse}></img>)
            })}
            <h2 className="meaning" id="yourPresent"></h2>
        </div>
    )
}