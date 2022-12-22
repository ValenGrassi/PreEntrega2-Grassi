import { useContext } from "react"
import { CartContext } from "./CartContext"
import { Link } from "react-router-dom"
import { updateDoc, serverTimestamp, collection } from "firebase/firestore"
import { doc, setDoc } from "firebase/firestore"
import db from "../utils/firebaseConfig"
import { increment } from "firebase/firestore"

const Cart = () => {
    const {cartList} = useContext(CartContext)
    const test = useContext(CartContext)
    console.log(cartList)
    
const createOrder = () => {
    let order = {
        buyer: {
            name: "Dibu Martinez",
            email: "dibumartinez@gmail.com",
            phone:"1124612121"
        },
        date: serverTimestamp(),
        items: test.cartList.map(item => ({
            id: item.idItem,
            price: item.costItem,
            title: item.nameItem,
            qty: item.qtyItem
        })),
        total: test.calcTotal() * 1.21
    }
    console.log(order)

    const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db,"orders"))
        await setDoc(newOrderRef, order);
        return newOrderRef
    }

    createOrderInFirestore()
    .then(response => {
        alert("¡Has comprado correctamente! Order ID = " + response.id)
        test.cartList.forEach(async(item) => {
            const itemRef = doc(db,"productos", item.idItem);
            await updateDoc(itemRef,{
            // stock: stock - item.qtyItem
            stock: increment(-item.qtyItem) 
            });
        })
        test.clear()
    })
    .catch(err => console.log(err))
}
    return(
        <>
            <h1 class="titulo-carrito">Carrito</h1>
            {
                test.cartList.length === 0 &&
                <>
                <div class="carrito-vacio">
                <h5>No hay productos en el carrito:</h5>
                <Link to='/'><button style={{marginLeft: "30px"}}>Volver a la página</button></Link>
                </div>
                </>
            }
            
            <div className="row">
            <div className="col-6">
            {
                test.cartList.length > 0 &&  
                cartList.map(  item => <>
                <div class="carrito-vacio row">
                    <div className="col-2">
                    <img src={item.imgItem} className="foto-carrito"/>
                    </div>
                    <div className="col-6">
                        <h5>{item.nameItem}</h5>
                        <h6>{item.qtyItem} unidad/es.</h6>
                        <h5> ${item.costItem} c/u.</h5>
                        <h3>${test.calcTotalItem(item.idItem)} </h3>
                    </div>
                    <div className="col-4">
                        <button onClick={() => test.removeItem(item.idItem)} className="boton-borrar">Borrar</button>
                    </div>
                </div>
                </>)
            }
            </div>
            <div className="col-6">
            {
                test.cartList.length > 0 &&  
                <>
                <h1 style={{textAlign:"center"}}>ORDEN</h1>
                <h3 style={{textAlign:"center"}}>Subtotal sin impuestos: ${test.calcTotal()}.</h3>
                <h2 style={{textAlign:"center"}}>Total: ${test.calcTotal() * 1.21} finales.</h2>
                <div className="div-botones">
                    <button onClick={() => test.clear()}  style={{margin:"10px",cursor:"pointer"}}>Borrar todos los productos</button>
                    <button onClick={createOrder} style={{margin:"10px",cursor:"pointer"}}>Hacer checkout</button>
                </div>
                </>
            }
            </div>
            </div>
        </>        
    )
}

export default Cart