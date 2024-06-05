import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import {Link, useNavigate} from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home");
    const {token,setToken} = useContext(StoreContext)

    const navigate = useNavigate();
    
    const logout = () =>{
      localStorage.removeItem("token");
      setToken("");
      navigate("/")
    }
    
  return (
    <div className='navbar'>
      <img src={assets.logo} alt="" className='logo' />
      <ul className="navbar-menu">
        <Link to='/' onClick={() => setMenu("home")} className={menu==='home'?"active":""}>Home</Link>
        <a href='#explore-menu' onClick={()=> setMenu("favorite")} className={menu=='favorite'?'active':""}>Explore Menu</a>
        <a href='#footer' onClick={()=> setMenu("aboutus")} className={menu=='aboutus'?'active':""}>About us</a>
      </ul>
      <div className="navbar-right">
        {!token?<button onClick={()=>setShowLogin(true)} >Sign in</button>
        :<div className='navbar-profile'>
          <img src={assets.profile_icon} alt="" />
          <ul className="nav-profile-dropdown">
            <li><img src={assets.food_icon} alt="" /><p>Foods</p></li>
            <hr />
            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
          </ul>
        </div>
        }
      </div>
    </div>
  )
}

export default Navbar
