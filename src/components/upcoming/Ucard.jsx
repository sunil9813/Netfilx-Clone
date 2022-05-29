import React from "react"
import { Link } from "react-router-dom"

const Ucard = ({ item: { id, cover, name, time } }) => {
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h3>{name}</h3>
          <span>{time}</span> <br />
          {/*<Link to={`/singlepage/${id}`}>*/}
          <button className='primary-btn'>
            <i className='fa fa-play'></i> PLAY NOW
          </button>
          {/*</Link>*/}
        </div>
      </div>
    </>
  )
}

export default Ucard
