import React from 'react'
import './footer.css'

function Footer() {
  let date = new Date();
  return (
    <div className='footer'>Copyright © {date.getFullYear()} Sahas Purkuti. All Rights Reserved.</div>
  )
}

export default Footer