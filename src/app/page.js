import React from 'react'
import HomeComponent from './component/HomeComponent'
import AboutSection from './component/AboutSection'
import Awards from './component/Awards'
function page() {
  return (
   <div>
     <HomeComponent/>
     <AboutSection/>
     <Awards/>
    </div>
  )
}

export default page