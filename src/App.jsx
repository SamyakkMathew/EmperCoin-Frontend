
// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from './components/Navbar'


import  Tokenomics  from './components/Tokenomics'

import Newsletter from './components/Newsletter'

import Roadmap from './components/Roadmap'
import Footer from './components/Footer'
import Buy from './components/Buy'

import Whitepaper from './components/Whitepaper'
import Service from './components/Service'
import Team from './components/Team'
import Faq from './components/Faq'

import Home from './components/Home'



 const App = () => {
  
 
  return (
    <div>
    

      <Navbar/>

      <main>
        <div id='home'>
          
        
          <Home/>
        </div>
        <div>
          <Tokenomics/>
        </div>
        <div id='roadmap'>
          <Roadmap/>
        </div>
        <div>
          <Service/>
        </div>
        <div>
          <Buy/>
        </div>
        <div id='whitepaper'>
          <Whitepaper/>
        </div>
        
        <div>
          <Newsletter/>
        </div>
        
        <div id='team'>
          <Team/>
        </div>
        <div>
          <Faq/>
        </div>
        <div>
        
          
        </div>
        <div id='contact'>
          <Footer/>
        </div>

      </main>
    </div>
  )
}
export default App