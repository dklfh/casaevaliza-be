import React from 'react'
import Navbar from '../../component/website/navbar/navbar'
import Footer from '../../component/website/footer/footer'
import Image from '../../component/website/layout/image'
import Section from '../../component/website/layout/section'
import Div from '../../component/website/layout/div'
import H2 from '../../component/website/layout/h2'
import Divp from '../../component/website/layout/divp'
import Buttonmerah from '../../component/website/layout/buttonmerah'
import Buttonputih from '../../component/website/layout/buttonputih'
import hero from '../../assets/images/content/hero4.png'
import H3 from '../../component/website/layout/h3'
import img1 from './../../assets/images/content/gallery1.png'
import img2 from './../../assets/images/content/gallery2.png'
import img3 from './../../assets/images/content/gallery3.png'
import img4 from './../../assets/images/content/gallery4.png'
import img5 from './../../assets/images/content/gallery5.png'
import img6 from './../../assets/images/content/gallery6.png'

function Home() {
  return (
    <div>
      <Navbar />
      <Image />
      <Section>
        <Div>
          <H2 text='Welcome To Casa Evaliza' />
          <Divp>
            <p>Casa Evaliza is a spacious Bali rental villa, located 250 metres from the beach in the up market Seminyak area on Bali's southwest coast and accessed through the same road which serves the Club at The Legian Hotel, and just minutes walk from the world famous Ku De Ta restaurant. One of the best villas in Bali, the best place for you to stay on vacation.</p>
          </Divp>

          <div className='flex flex-col lg:flex-row'>
            <div className='lg:w-7/12 mr-auto place-self-center'>
              <h1 className='max-w-2xl mb-5 text-4xl font-gothic font-black leading-none md:text-5xl xl:text-6xl tracking-widest text-bold dark:text-white'>
                Maximize your enjoyment of Bali's beauty in our villa
              </h1>
              <div className='flex gap-6 mt-10'>
                <Buttonmerah text="About Us" to="/about" />
                <Buttonputih text="Contact Us" to="/contact" />
              </div>
            </div>
            <div className='lg:w-5/12'>
              <img src={hero} alt="" />
            </div>
          </div>

          <div className='md:py-0 lg:py-9 mb-10'>
            <div className='flex items-center justify-between mb-8'>
              <H3 text="Gallery" />
              <Buttonputih text="More" to="/gallery" />
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div>
                  <img className='h-auto max-w-full rounded-lg' src={img1} alt="" />
                </div>
                <div>
                  <img className='h-auto max-w-full rounded-lg' src={img2} alt="" />
                </div>
                <div>
                  <img className='h-auto max-w-full rounded-lg' src={img3} alt="" />
                </div>
                <div>
                  <img className='h-auto max-w-full rounded-lg' src={img4} alt="" />
                </div>
                <div>
                  <img className='h-auto max-w-full rounded-lg' src={img5} alt="" />
                </div>
                <div>
                  <img className='h-auto max-w-full rounded-lg' src={img6} alt="" />
                </div>
              </div>
          </div>
        </Div>
      </Section>
      <Footer />
    </div>
  )
}

export default Home