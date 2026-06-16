import { collection, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';

import { db } from './config/firebase'
import Navbar from './compenents/Navbar';

const App = () => {


  
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App
