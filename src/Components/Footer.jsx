import copy from "../Pictures/copy.png";
import sakura from "../Pictures/Sakura.png"
export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-company">
                <img className="footer-copy" src={copy}/>
                <p className="footer-text">Sakura Brothers</p>
            </div>

           <img className="footer-sakura" src={sakura}/>
        </div>
    )
}