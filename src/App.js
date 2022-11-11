import "./App.css"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import ItemListContainer from "./components/ItemListContainer"
import Home from "./pages/Home"

const App = () => {
  return(
    <>
    <Home />
    <ItemListContainer greeting="programador" />
    <Body msg="segunda pre-entrega"/>
    </>
  )
}

export default App;