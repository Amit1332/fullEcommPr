import React from 'react'
import MyWishListProductCard from './MyWishListProductCard/MyWishListProductCard'
import CataLoguesHeadingNav from "../MySharedCatalogues/CataLoguesHeadingNav/CataLoguesHeadingNav";
const MyWishList = () => {
  const cardData = [
    {
        url :"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },
    {
        url :"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },
    {
        url :"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },
    {
        url :"https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },
    {
        url :"https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },
    {
        url :"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },
    {
        url :"https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=831&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },
    {
        url :"https://images.unsplash.com/photo-1560769629-975ec94e6a86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80",
        cardTitle :"TDX Sinkers",
        cardText : "5 types of shoos available",
        cardPrice:"₹675.00",
    },

] 
  

  return (
    <div className='container-fluid mt-5 p-0'>
      <CataLoguesHeadingNav  title="My WishList"/>
      <MyWishListProductCard  cardData = {cardData} />
    </div>
  )
}

export default MyWishList