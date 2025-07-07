
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
import Layout from './pages/admin/Layout'
import ListBookings from './pages/admin/ListBookings'
import Dashborard from './pages/admin/Dashborard'
import ListShows from './pages/admin/ListShows'
import Addshows from './pages/admin/Addshows'

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

        {/* admin routes*/}
        <Route path='/admin/*' element={<Layout/>}>

          <Route  index element={<Dashborard/>}/>
          <Route path='add-shows' element={<Addshows/>}/>
          <Route path='list-shows'  element={<ListShows/>}/>
          <Route path='list-bookings'  element={<ListBookings/>}/>
       
         

          </Route>

        </Routes>

     
        
         { !isAdminRoute && <Footer/> }
    </>
  )
}

export default App
