import {Link} from "react-router-dom";
import "./DrinksCard.css";



export const DrinksCard = (drink) => {
    
    return (
    
        <li className="drinksCard">
            <Link to={`/lookup.php?i=${drink.drink.idDrink}`} className="drinksCardLink" >
            <img className="drinkImage" src={drink.drink.strDrinkThumb} alt={drink.drink.strDrink} />
            <div className="drinksName">
                {drink.drink.strDrink}
            </div>
            </Link>
        </li>
        
    )
}