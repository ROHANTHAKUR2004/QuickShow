
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import  SeatLayout from './pages/SeatLayout'
import  MyBookings from './pages/MyBookings'
import Favourites from './pages/Favourites'
import { Toaster } from 'react-hot-toast'

const App = () => {

  const isAdminRoute = useLocation().pathname.startsWith('/admin')

  return (
    <>

    <Toaster/>

     { !isAdminRoute &&  <Navbar/> }

        <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/movies/:id' element={<MovieDetails/>}/>
        <Route path='/movies/:id/:date' element={< SeatLayout/>}/>
        <Route path='/mybookings' element={< MyBookings/>}/>
        <Route path='/favorite' element={<Favourites/>}/>

        </Routes>

     
        
         { !isAdminRoute && <Footer/> }
    </>
  )
}

export default App
