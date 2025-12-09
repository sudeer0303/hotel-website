// import React from 'react'
import Navbar from './Components/Navbar.jsx'
import { useLocation } from 'react-router-dom'

const App = () => {

  const location = useLocation();
  const isOwnerPath = location.pathname.includes("admin");
  // const isOwnerPath = useLocation().pathname.includes("admin");
  // console.log(isOwnerPath);

    return (
      <div>
        { !isOwnerPath && <Navbar /> }
        {/* <Navbar /> */}
      </div>
    )
}

export default App
