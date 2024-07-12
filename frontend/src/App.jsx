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
import Admincms from './pages/cms-pages/cms-admin'
import Aboutcms from './pages/cms-pages/cms-about'
import Accocms from './pages/cms-pages/cms-acco'
import Bedroomcms from './pages/cms-pages/cms-bedroom'
import Bookcms from './pages/cms-pages/cms-book'
import Contactcms from './pages/cms-pages/cms-contact'
import Eventcms from './pages/cms-pages/cms-event'
import Facilitiescms from './pages/cms-pages/cms-facilities'
import Foodcms from './pages/cms-pages/cms-food'
import Francecms from './pages/cms-pages/cms-france'
import Gallerycms from './pages/cms-pages/cms-gallery'
import Gymcms from './pages/cms-pages/cms-gym'
import Kitchencms from './pages/cms-pages/cms-kitchen'
import Linkcms from './pages/cms-pages/cms-link'
import Livingcms from './pages/cms-pages/cms-living'
import Locationcms from './pages/cms-pages/cms-location'
import Mediacms from './pages/cms-pages/cms-media'
import Ourgallerycms from './pages/cms-pages/cms-ourgallery'
import Presscms from './pages/cms-pages/cms-press'
import Servicescms from './pages/cms-pages/cms-services'
import Sitemapcms from './pages/cms-pages/cms-sitemap'
import Spacms from './pages/cms-pages/cms-spa'
import Suitecms from './pages/cms-pages/cms-suite'
import Swimmingcms from './pages/cms-pages/cms-swimming'
import Halamanedit from './component/cms/halamanedit'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* Website */}
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/acco' element = {<Acco/>}></Route>
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
          <Route path='/admin' element = {<Admincms/>}></Route>
          <Route path='/cms-about' element = {<Aboutcms/>}></Route>
          <Route path='/cms-acco' element = {<Accocms/>}></Route>
          <Route path='/cms-bedroom' element = {<Bedroomcms/>}></Route>
          <Route path='/cms-book' element = {<Bookcms/>}></Route>
          <Route path='/cms-contact' element = {<Contactcms/>}></Route>
          <Route path='/cms-event' element = {<Eventcms/>}></Route>
          <Route path='/cms-facilities' element = {<Facilitiescms/>}></Route>
          <Route path='/cms-food' element = {<Foodcms/>}></Route>
          <Route path='/cms-france' element = {<Francecms/>}></Route>
          <Route path='/cms-gallery' element = {<Gallerycms/>}></Route>
          <Route path='/cms-gym' element = {<Gymcms/>}></Route>
          <Route path='/cms-kitchen' element = {<Kitchencms/>}></Route>
          <Route path='/cms-link' element = {<Linkcms/>}></Route>
          <Route path='/cms-living' element = {<Livingcms/>}></Route>
          <Route path='/cms-location' element = {<Locationcms/>}></Route>
          <Route path='/cms-media' element = {<Mediacms/>}></Route>
          <Route path='/cms-ourgallery' element = {<Ourgallerycms/>}></Route>
          <Route path='/cms-press' element = {<Presscms/>}></Route>
          <Route path='/cms-services' element = {<Servicescms/>}></Route>
          <Route path='/cms-sitemap' element = {<Sitemapcms/>}></Route>
          <Route path='/cms-spa' element = {<Spacms/>}></Route>
          <Route path='/cms-suite' element = {<Suitecms/>}></Route>
          <Route path='/cms-swimming' element = {<Swimmingcms/>}></Route>

          <Route path='/edit/:endpoint/:_id' element = {<Halamanedit/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App;