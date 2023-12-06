import React, { useState } from 'react'
import Navbar from './Navbar'
import Newsboard from './Newsboard'

const Layout = () => {
    const [category, setCategory] =useState("general")
  return (
    <div>
      <Navbar setCategory={setCategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default Layout
