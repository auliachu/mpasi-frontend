import React, { useContext, useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Header = () => {
  const {token} = useContext(StoreContext)
  const whenNoToken = ()=>{
    return alert("Silahkan Login/Register terlebih dahulu");
  }
  return (
    <div className='header'>
      <div className="header-contents">
        <h2>Temukan Rekomendasi Makanan Pendamping ASI Sekarang</h2>
        <p>Setiap resep dirancang untuk memenuhi kebutuhan nutrisi si kecil dan membantu dalam tahap tumbuh kembangnya</p>
        {!token?<button onClick={whenNoToken}>Dapatkan Rekomendasi</button>:<Link to='/recommend'><button>Dapatkan Rekomendasi</button></Link>}
      </div>
    </div>
  )
}

export default Header
