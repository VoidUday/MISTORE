import React from 'react'
import '../styles/StarProduct.css'
const StartProduct = ({StartProduct}) => {
  return (
    <div className='starProduct'>
      <div><a href={StartProduct[0].url}> <img src={StartProduct[0].image} alt={"First product"} /></a></div>
      <div>
      <a href={StartProduct[1].url}> <img src={StartProduct[1].image} alt={"First product"} /></a>
      <a href={StartProduct[2].url}> <img src={StartProduct[2].image} alt={"First product"} /></a>
      <a href={StartProduct[3].url}> <img src={StartProduct[3].image} alt={"First product"} /></a>
      </div>
    </div>
  )
}

export default StartProduct
