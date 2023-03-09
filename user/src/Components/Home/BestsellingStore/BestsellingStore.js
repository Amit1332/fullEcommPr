import React from 'react'

export default function BestsellingStore({heading, data}) {
    console.log(data);
  return (
    <div className='BestsellingStore '>
        <div className="navCategorycomponent">
        <h1>{heading}</h1>
        </div>
        <div className="bestsellerlist grid" >
            {data && data.map((ele)=>{
           return (<div className="seller">
            <div className="img" style={{backgroundImage:`url(${ele.pic})`}}>
                <div className="circle"><h3>{ele.name}</h3></div>
            </div>
            <div className="productsbrand">
                <h1>{ele.name}</h1>
                <p><span>{ele.brandproduct.first}</span> <span>*</span> <span>{ele.brandproduct.second}</span></p>
            </div>
            <div className='tag'><i class="las la-tag"></i><p>Delivery with in 24 hour</p></div>
            </div>)
            })}
             {data && data.map((ele)=>{
           return (<div className="seller">
            <div className="img" style={{backgroundImage:`url(${ele.pic})`}}>
                <div className="circle"><h3>{ele.name}</h3></div>
            </div>
            <div className="productsbrand">
                <h1>{ele.name}</h1>
                <p><span>{ele.brandproduct.first}</span> <span>*</span> <span>{ele.brandproduct.second}</span></p>
            </div>
            <div className='tag'><i class="las la-tag"></i><p>Delivery with in 24 hour</p></div>
            </div>)
            })}
        </div>

    </div>
  )
}
