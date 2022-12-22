import { createContext } from 'react';
import { useState } from 'react';

export const CartContext = createContext();

const CartContextProvider = (props) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (item,qty) => {
        const exists = cartList.find(product => product.idItem === item.id);
        if (exists === undefined){
        setCartList([
            ...cartList,
            {
                idItem : item.id,
                imgItem : item.image,
                nameItem : item.name,
                costItem : item.cost,
                qtyItem: qty
            }
        ]);
        }else{
            exists.qtyItem += qty;
        }
    }

    const clear = () => {
        setCartList([]);
    }

    const removeItem = (id) => {
        let filter = cartList.filter(item => item.idItem != id);
        setCartList(filter);
    }

    const calcQty = () => {
        const itemQty = cartList.map(item => item.qtyItem);
        return itemQty.reduce(((previousValue, currentValue) => previousValue + currentValue), 0)
    }

    const calcTotalItem = (idItem) => {
        let index = cartList.map(item => item.idItem).indexOf(idItem);
        return cartList[index].costItem * cartList[index].qtyItem;
    }
    
    const calcTotal = () => {
        const totalItem = cartList.map(item => calcTotalItem(item.idItem));
        return totalItem.reduce((previousValue, currentValue) => previousValue + currentValue)
    }
    
    const calcTotalConImp = () => {
        const totalItem = calcTotal * 0.21;
        return totalItem;
    }

    return (
        <CartContext.Provider value={{cartList, calcTotalConImp, addItem, clear, removeItem, calcQty, calcTotalItem, calcTotal}}>
            {props.children}
        </CartContext.Provider>
    )
}


export default CartContextProvider;