import "./App.css"
import NavBar from "./components/NavBar"
import Body from "./components/Body"
import ItemListContainer from "./components/ItemListContainer"

const App = () => {
  return(
    <>
    <NavBar />
    <ItemListContainer greeting="programador" />
    <Body msg="segunda pre-entrega"/>
    </>
  )
}

export default App;