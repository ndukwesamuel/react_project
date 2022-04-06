const reducer = (state, action) => {
    if (action.type === "CLEAR_CART"){
        return { ...state,  cart:[]}
    }

    
    if (action.type === "REMOVE"){
        return { ...state, 
                cart : state.cart.filter( (cartitem) => cartitem.id !== action.payload )
            }
    }


    if (action.type === "INCREASE_ITEM"){
        let tempCart = state.cart.map(  (cartitem) => {
            if (cartitem.id === action.payload){
                return {...cartitem, amount:cartitem.amount +1}
            }
            return cartitem
            
        })
        return {...state, cart:tempCart}

    }
    if (action.type === "DECREASE_ITEM"){
        let tempCart = state.cart
        .map(cartItem  => {
            if (cartItem.id === action.payload){
                return {...cartItem, amount:cartItem.amount - 1}
            }
            console.log('working');
            return cartItem
        }
        )
        .filter((cartItem) => cartItem.amount !== 0)
        return {...state, cart:tempCart}

    }


    if (action.type === "GET_TOTALS"){
        let {total, amount} = state.cart.reduce(
            (cartTotal, cartItem) => {
                    const {price, amount } = cartItem
                    console.log(price, amount);
                    const itemTotal = price * amount

                    cartTotal.total += itemTotal
                    cartTotal.amount += amount
                    return cartTotal
            }, 
            {
                total:0,
                amount:0
            }
        )
       
        total =parseFloat(total.toFixed(2))

        return {...state , total, amount}
    }




    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart
          .map((cartItem) => {
            if (cartItem.id === action.payload.id) {
              if (action.payload.type === 'inc') {
                return { ...cartItem, amount: cartItem.amount + 1 }
              }
              if (action.payload.type === 'dec') {
                return { ...cartItem, amount: cartItem.amount - 1 }
              }
            }
            return cartItem
          })
          .filter((cartItem) => cartItem.amount !== 0)
        return { ...state, cart: tempCart }


        
      }

    


    return state

    
}


export default reducer