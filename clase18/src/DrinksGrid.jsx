import { DrinksCard } from "./DrinksCard"
import drinks from "./data/tragos.json"
import "./DrinksGrid.css"

export const DrinksGrid = () => {


    return (
        <ul className="drinksGrid">
            {drinks.drinks.map((drink) => (
                <DrinksCard key={drink.idDrink} drink={drink}/>
            ))}
        </ul>
    );
};