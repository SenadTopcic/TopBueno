import React from 'react'
import imgSrc from "../assets/images/logo-tb-953x287.png"

const Header = () => {
  return (
    <header className="image-container-play">
      <img
        src={imgSrc}
        alt="TestBusters learning lab Vienna 2023"
      />
    </header>
  )
}

export default Header