import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import { Badge } from '@mui/material';
import { useContext } from 'react';
import { CartContext } from './CartContext';


const CartWidget = () =>{
    const test = useContext(CartContext);
    return(
        <Badge badgeContent={test.calcQty()} color="error" max={9}>
        <ShoppingCartSharpIcon />
        </Badge>
    )
}

export default CartWidget;