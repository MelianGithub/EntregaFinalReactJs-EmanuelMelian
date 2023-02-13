import { ItemListContainer } from './components/containers/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import { CartContainer } from './components/containers/CartContainer/CartContainer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { CartContextProvider } from './context/CartContext';
import NavBar from './components/NavBar/NavBar'
import CheckOutContainer from './components/containers/CheckOutContainer/CheckOutContainer.jsx';

function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>

          <NavBar />
          <Routes>

            <Route path='/' element={<ItemListContainer saludo="Mundo Gaming" />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer saludo="Mundo Gaming" />} />
            <Route path='/detail/:detailId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<CartContainer />} />
            <Route path='/checkout' element={<CheckOutContainer />} />
            <Route path='*' element={<Navigate to='/' />} />

          </Routes>


        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App; 