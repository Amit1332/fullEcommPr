import React from 'react'

const DashboardCard = () => {
const DashboardCard = [
    {
        count:"03",
        typesOfAction:"Product in your Cart",
        view:"View My Cart",
        icon:"las la-shopping-cart",

    },
    {
        count:"05",
        typesOfAction:"Product in Wishlist",
        view:"View All Wishlist",
        icon:"las la-heart",
        
        
    },
    {
        count:"24",
        typesOfAction:"Product in Your Order",
        view:"View All Orders",
        icon:"las la-cube",
        
    },
    {
        count:"05",
        typesOfAction:"Coupons",
        view:"View All Coupons",
        icon:"las la-futbol",
        
    }
]

  return (
    <>
      <div className="container-fluid p-0 dashboard_Card">
        <div className="row">
            {
               DashboardCard.map((elem)=>{
                return(
                    <>
                    <div className="col-3">
                <div className="card">
                    <div className="card-body">
                        <h2>{elem.count}</h2>
                        <p>{elem.typesOfAction}</p>
                        <div className="row d-flex">
                            <div className="col-10 d-flex align-items-center " style={{color:"#164c96"}}>
                             <p >{elem.view}</p>
                             <i class="las la-arrow-right"></i>
                            </div>
                            <div className="col-2 d-flex  p-0 align-items-end">
                            <div className="boxiconn">
                                <i className={`${elem.icon}`}></i>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                     </div>
                 </div>
                    
                    </>
                )
               }) 
            }
            
           

        </div>
      </div>
    </>
  )
}

export default DashboardCard
