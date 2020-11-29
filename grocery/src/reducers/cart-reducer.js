const GROCERY_ITEMS = [
    {name : "Sliced bacon",	price:  5.79},
    {name : "Pasta"	,price:  1.28},
    {name : "Dried beans",	price:  1.36},
    {name : "Ground beef",	price:  4.12},
    {name : "All-purpose flour", price:  2.56},
    {name : "Creamy peanut butter",	price:  5.79},
    {name : "Top round steak",	price:  5.78},
    {name : "Potatoes",	price:  0.72},
    {name : "Frozen turkey", price:  1.59},
    {name : "Sirloin steak",price:  8.07},
    {name : "White rice",	price:  0.72},
    {name : "Chocolate chip cookies",	price:  3.479},
    {name : "Seedless grapes",	price:  2.67},
    {name : "Sugar",	price:  0.65},
    {name : "Ice cream",	price:  4.709}
]

const cartReducer = (state, action) => {
    if (state=== undefined) {
        return {
            forSell: GROCERY_ITEMS,
            cart : []
        }
    }
    switch (action.type) {
        case 'ADD_TO_CART': {

        }
        case 'REMOVE_FROM_CART' : {

        }
        default :{
            return state
        }
    }
}
export default cartReducer;