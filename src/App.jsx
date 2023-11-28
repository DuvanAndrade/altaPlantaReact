import './App.css'
import './styles/styles.scss'
import Navbar from './components/Navbar/Navbar'
import PlantasItems from './components/PlantasItems/PlantasItems'
import Footer from './components/Footer/Footer'
function App() {

  return (
    <>
      <Navbar/>
      <PlantasItems greeting={"NUESTRAS PLANTAS"}/>
      <Footer/>  
    </>
  )
}

export default App
