import React from 'react'
import "./Home.css"
import Footer from '../../include/Footer/Footer'
import Sliderfront from '../Sliderfront/Sliderfront'
import CategoryComponent from '../Categorycomponent/CatCompo.js'
import Categorydatearry from "../Categorycomponent/Categorydatearry"
import Productlisthome from '../ProductlistComponent/Productlisthome'
import Productdata from "../ProductlistComponent/Productdata"
import BestsellingStore from '../BestsellingStore/BestsellingStore'
import Bestsellingstoredata from "../BestsellingStore/Bestsellingstoredata"
import Offer from '../Offer/Offer'
import Productwithsuggetion from '../ProductlistComponent/Productwithsuggetion'
import GetStarted from "../GetStarted/GetStarted"
export default function Home() {
  return (
    <div className='homeComponent'>
    <Sliderfront/>
    <div className="pt-1"></div>
    <CategoryComponent headding="Shop Our Top Categories"  catdata ={Categorydatearry} />
    <Productlisthome heading="Most Selling Products" data={Productdata}/>
    <BestsellingStore heading="Best Selling Store" data={Bestsellingstoredata}/>
    <Productlisthome heading="Todays Best Deals For You!" data={Productdata}/>
    <BestsellingStore heading="Choose By Brand" data={Bestsellingstoredata}/>
    <Productwithsuggetion heading="Todays Best Deals For You!" data={Productdata}/>
    <Offer/>
    <Productlisthome heading="Weekly Popular Products" data={Productdata}/>
    <GetStarted/>
    <Footer/>
    </div>
  )
}
