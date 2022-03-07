import React from 'react'
import './Header.css'

function Header() {
  const styleObj = {
    fontSize: 35,
    fontFamily: 'getschwifty',
    textDecoration: 'none',
    color: '#e89ac7'
  }

  return (
    <header >
      <p className='headercontainer'>
        <a href={'https://rickandmortyapi.com/'} style={styleObj} target='_blank'>Rick and Morty</a> REST API Task
      </p>
    </header>
  )
}

export default Header
