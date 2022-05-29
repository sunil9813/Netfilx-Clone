import React, { useState } from "react"
import "./home.css"
import { homeData } from "../../dummyData"
import Home from "./Home"

const Homes = () => {
  const [items, setItems] = useState(homeData)

  return (
    <>
      <section className='home'>
        <Home items={items} />
      </section>
      <div className='mragin'></div>
    </>
  )
}

export default Homes
