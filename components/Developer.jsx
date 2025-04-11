import React from 'react'
import About from './About'
import WelcomeHeader from './WelcomeHeader'
const Developer = () => {
  return (
    <div className='-ml-45 -mt-18'>
        <WelcomeHeader />
       <About isDisplayBtn = {true} />
    </div>
  )
}

export default Developer