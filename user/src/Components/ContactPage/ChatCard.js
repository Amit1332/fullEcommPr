import React from "react";
const chatCard = [
    { icon:"lab la-rocketchat",
        title:"Chat to Sales",
        paraCont:"Speak to our friendly team",
        helpCont:"sales@flippyseven.com"
    },
    { icon:"lab la-rocketchat",
        title:"Chat to Support",
        paraCont:"We're here to help",
        helpCont:"sales@flippyseven.com"
    },
    { icon:"las la-map-marker-alt",
        title:"Visit Us",
        paraCont:"Visit our office HQ",
        helpCont:"sales@flippyseven.com"
    },
    { icon:"las la-phone",
        title:"Call Us",
        paraCont:"Mon -Fri from 8 Am to 5 Pm",
        helpCont:"sales@flippyseven.com"
    }
]

const cardStyle={
    backgroundColor:"#f9fafb"
}


const ChatCard = () => {
  return (
    <>
      <div className="container-fluid p-0">
        <div class="row card_row_cetn">
        {
                chatCard.map((elem)=>{
                    return (
                        <>
          <div class="col card_row_cetn">
         
                        <div class="card" style={{backgroundColor:"#f9fafb"}}>
              <div class="card-body">
                <div class="card-title" style={{backgroundColor:"#164c96"}}><i class={`${elem.icon}`} style={{color:"white"}}></i></div>
                <h6 class="card-subtitle mb-2" style={{color:"black"}}>{elem.title}</h6>
                <p class="card-text mb-2">
                 {elem.paraCont}
                </p>
                <p class="card-text">
                <a href="" style={{color:"#164c96"}}>{elem.helpCont}</a> 
                </p>
               
                
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
  );
};

export default ChatCard;
