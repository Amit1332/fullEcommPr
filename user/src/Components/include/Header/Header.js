import React from 'react'
import Logo from "../Logo/Flippy7.jpeg"
import "./Header.css"
import Category from "./Category"
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <div className="Navbarwcat ">
    <div className='Nav '>
        <div className="leftnavbar">
            <Link className="logonav" to="/">
                <img src={Logo} alt="" />
            </Link>
            
        </div>
        
        <div className="rightnavbar dflex">
        
            <div className="startrightnav dflex">
            <div className="inputdiv">
                <i class="las la-search"></i>
                <input type="text" placeholder='Search product' />
            </div>
                <div className="key2 dflex">
                    <i class="las la-mobile"></i>
                    <p>Download App</p>
                </div>
                <div className="key2 key1 dflex">
                    <i class="las la-user-plus"></i>
                    <p>Become Supplier</p>
                </div>
            </div>
            <div className="endrightnav dflex">
                <Link className="key dflex" to="/login">
                <i class="las la-user"></i>
                    <p>Account</p>
                </Link>
                <div className="key dflex">
                <i class="las la-shopping-cart"></i>
                    <p>Cart</p>
                </div>
                <div className="key dflex">
                <i class="las la-heart"></i>
                    <p>Wishlist</p>
                </div>
            </div>
        </div>
        
        </div>
        <div className="category">
            {Category.map(function(item){
             return (
                <Link>{item}</Link>
                )
           })}
        </div>
    </div>
  )
}
