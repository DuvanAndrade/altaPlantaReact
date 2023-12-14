import './App.css'
import './styles/styles.scss'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={"NUESTROS PRODUCTOS"}/>}/>
        <Route path='*' element={<Navigate to={'/'}/>}/>
      </Routes>
      
      <Footer/> 
    </BrowserRouter>
       
  )
}

export default App
