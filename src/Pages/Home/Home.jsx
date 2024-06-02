import React, { useState } from 'react'
import './Home.css'
import SIdebar from '../../Components/Sidebar/SIdebar'
import Feed from '../../Components/Feed/Feed'

const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
      <SIdebar sidebar={sidebar} category={category} setCategory={setCategory} />
      <div className={`container ${sidebar?"":'large-container'}`}>
        <Feed category={category} />
      </div>
    </>
  )
}

export default Home
