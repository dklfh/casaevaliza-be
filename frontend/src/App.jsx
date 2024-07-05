import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Home from "../src/pages/website-pages/home"
import About from './pages/website-pages/about'
import Acco from './pages/website-pages/acco'
import Bedroom from './pages/website-pages/bedroom'
import Book from './pages/website-pages/book'
import Contact from './pages/website-pages/contact'
import Event from './pages/website-pages/event'
import Facilities from './pages/website-pages/facilities'
import Food from './pages/website-pages/food'
import France from './pages/website-pages/france'
import Gallery from './pages/website-pages/gallery'
import Gym from './pages/website-pages/gym'
import Kitchen from './pages/website-pages/kitchen'
import Link from './pages/website-pages/link'
import Living from './pages/website-pages/living'
import Location from './pages/website-pages/location'
import Media from './pages/website-pages/media'
import Ourgallery from './pages/website-pages/ourgallery'
import Press from './pages/website-pages/press'
import Services from './pages/website-pages/services'
import Sitemap from './pages/website-pages/sitemap'
import Spa from './pages/website-pages/spa'
import Suite from './pages/website-pages/suite'
import Swimming from './pages/website-pages/swimming'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Website */}
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/accommodation' element = {<Acco/>}></Route>
          <Route path='/bedroom' element = {<Bedroom/>}></Route>
          <Route path='/book' element = {<Book/>}></Route>
          <Route path='/contact' element = {<Contact/>}></Route>
          <Route path='/event' element = {<Event/>}></Route>
          <Route path='/facilities' element = {<Facilities/>}></Route>
          <Route path='/food' element = {<Food/>}></Route>
          <Route path='/france' element = {<France/>}></Route>
          <Route path='/gallery' element = {<Gallery/>}></Route>
          <Route path='/gym' element = {<Gym/>}></Route>
          <Route path='/kitchen' element = {<Kitchen/>}></Route>
          <Route path='/link' element = {<Link/>}></Route>
          <Route path='/living' element = {<Living/>}></Route>
          <Route path='/location' element = {<Location/>}></Route>
          <Route path='/media' element = {<Media/>}></Route>
          <Route path='/ourgallery' element = {<Ourgallery/>}></Route>
          <Route path='/press' element = {<Press/>}></Route>
          <Route path='/services' element = {<Services/>}></Route>
          <Route path='/sitemap' element = {<Sitemap/>}></Route>
          <Route path='/spa' element = {<Spa/>}></Route>
          <Route path='/suite' element = {<Suite/>}></Route>
          <Route path='/swimming' element = {<Swimming/>}></Route>

          {/* CMS */}
          {/* <Route path='/admin' element = {<Admin/>}></Route>
          <Route path='/cms-about' element = {<About/>}></Route>
          <Route path='/cms-accommodation' element = {<Acco/>}></Route>
          <Route path='/cms-bedroom' element = {<Bedroom/>}></Route>
          <Route path='/cms-book' element = {<Book/>}></Route>
          <Route path='/cms-contact' element = {<Contact/>}></Route>
          <Route path='/cms-event' element = {<Event/>}></Route>
          <Route path='/cms-facilities' element = {<Facilities/>}></Route>
          <Route path='/cms-food' element = {<Food/>}></Route>
          <Route path='/cms-france' element = {<France/>}></Route>
          <Route path='/cms-gallery' element = {<Gallery/>}></Route>
          <Route path='/cms-gym' element = {<Gym/>}></Route>
          <Route path='/cms-kitchen' element = {<Kitchen/>}></Route>
          <Route path='/cms-link' element = {<Link/>}></Route>
          <Route path='/cms-living' element = {<Living/>}></Route>
          <Route path='/cms-location' element = {<Location/>}></Route>
          <Route path='/cms-media' element = {<Media/>}></Route>
          <Route path='/cms-ourgallery' element = {<Ourgallery/>}></Route>
          <Route path='/cms-press' element = {<Press/>}></Route>
          <Route path='/cms-services' element = {<Services/>}></Route>
          <Route path='/cms-sitemap' element = {<Sitemap/>}></Route>
          <Route path='/cms-spa' element = {<Spa/>}></Route>
          <Route path='/cms-suite' element = {<Suite/>}></Route>
          <Route path='/cms-swimming' element = {<Swimming/>}></Route> */}
        </Routes>
      </Router>
    </>
  )
}

export default App;