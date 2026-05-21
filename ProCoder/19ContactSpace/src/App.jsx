import React from 'react'
import Navigation from './Components/Navigation/Navigation'

import './App.css'
import ContactHeader from './Components/ContactHeader/ContactHeader'
import ContactForm from './Components/ContactForm/ContactForm'

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="main_container">
        <ContactHeader />
        <ContactForm />
      </div>
    </div>
  )
}

export default App
