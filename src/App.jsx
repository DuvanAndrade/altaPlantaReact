import './App.css'
import './styles/styles.scss'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <ItemListContainer greeting={"NUESTRAS PLANTAS"}/>
      <Footer/>  
    </>
  )
}

export default App
