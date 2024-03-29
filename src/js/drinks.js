function drinkCalc({ guestUnits, numberPeopleDrinkBeer, sodaPrice, beerPrice }) {

    let quantityDrinks = units(guestUnits, numberPeopleDrinkBeer)

    return valueUnit(quantityDrinks, sodaPrice, beerPrice)
}

function units(guestUnits, numberPeopleDrinkBeer) {
    let soda, beer;

    soda = (guestUnits - numberPeopleDrinkBeer) * 1;

    beer = (numberPeopleDrinkBeer * 1.45) / .355;
        
    return {soda, beer}
}

function valueUnit(units, sodaPrice, beerPrice) {
    let soda, beer;

    soda = units.soda * sodaPrice;

    beer = units.beer * beerPrice;

    return {soda, beer}
}

function total() {
     
}    


export {drinkCalc}