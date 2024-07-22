import './App.css'
import { Outlet } from "react-router-dom";
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {
  
  return (
    <div className='App font-quicksand'>
      <Navbar/>
      <main style={{flexGrow: 1}} className='bg-gray-very-light'>
        <Outlet/>
      </main>
      <Footer />
    </div>
  )
}


export default App