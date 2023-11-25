import "./DrinksCard.css";


export const DrinksCard = (drink) => {
    
    return (
    
        <li className="drinksCard">
            
            <img className="drinkImage" src={drink.drink.strDrinkThumb} alt={drink.drink.strDrink} />

            <div>
                {drink.drink.strDrink}
            </div>
        </li>
        
    )
}