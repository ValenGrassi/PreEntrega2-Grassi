import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import NavBar from "../components/NavBar";
import ItemDetailContainer from "../components/ItemDetailContainer";

const Home = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<ItemListContainer />} />
                <Route path='/category/:idCategory' element={<ItemListContainer />} />
                <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            </Routes>

        </BrowserRouter>
    );
}

export default Home;