import { getForm } from "./dom.js"
import { drinkCalc } from "./drinks.js";

const inputInformation = getForm();

function drink() { //objt
    let values = {
        guestUnits: inputInformation.guests.value,
        numberPeopleDrinkBeer: inputInformation.numberPeopleDrinkBeer.value,
        sodaPrice: inputInformation.soda.value,
        beerPrice: inputInformation.beer.value
    }
    console.log(drinkCalc(values))
}

//input does not update the page
inputInformation.addEventListener('submit', (event) => {
    event.preventDefault();
    drink()
})