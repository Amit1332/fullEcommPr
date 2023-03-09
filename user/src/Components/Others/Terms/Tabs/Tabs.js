import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Tabs.css"

export default function Tabs() {
  const ordertabs = [
    {
      tabname: "Privacy Policy",
      tabId: "1",
    },
    {
      tabname: "Terms & Conditions",
      tabId: "2",
    }
    ,
    {
      tabname: "Return & Refund Policy",
      tabId: "3",
    },
    {
      tabname: "Cancellation Policy",
      tabId: "4",
    }
  ]
  const [tebs, settabs] = useState('1');
  return (
    <div className='border px-3 rounded-3  w-100 pb-2' style={{ overflow: 'auto',backgroundColor:"transparent" }}>
      <ul className="text-nowrap nav-tabs w-100 px-0 py-1 d-flex" id="ex2" role="tablist" style={{  overflow: 'auto',marginBottom: '-20px' }}>
        {
          ordertabs.map((elem) => {
            return (
              <>
                <li className="p-1" role="presentation">
                  <Link
                    className={tebs === `${elem.tabId}` ? `nav-link text-capitalize  p-2 py-1 active tabs_font_size` : `text-capitalize nav-link  p-2 py-1 tabs_font_size`}
                    id="ex3-tab-2"
                    data-mdb-toggle="tab"
                    href="#ex1-tabs-2"
                    role="tab"
                    style={tebs === `${elem.tabId}` ? (
                      {backgroundColor:"transparent", fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#164C96' }
                    ) : (
                      {backgroundColor:"transparent", fontWeight: '600', fontSize: '16px', lineHeight: '24px', color: '#667085' }
                    )}
                    onClick={() => { settabs(`${elem.tabId}`) }}
                    aria-controls="ex3-tabs-2"
                  >
                    <span style={{ fontWeight: '100' }}>

                      <i className={`${elem.icon1}`} style={{ fontSize: '18px', marginRight: '5px' }}></i>
                    </span>
                    {elem.tabname}
                    <span class="badge rounded-pill" style={{ backgroundColor: "#FEF4E9", color: "#D94A27" }}>{elem.orCount}</span>
                  </Link>

                </li>
              </>
            )
          })
        }

      </ul>
<hr style={{marginBottom:"-20px", marginTop:"11.9px",paddingBottom:"0px"}}/>
      <div className="tab-content w-100 mt-3" id="ex2-content">
        {tebs === '1' ? (
          <div className='overflow-auto container-fluid px-0 ttscrollbar'>
           <div className="term-rule">
                        <h4 className='pt-4'>What is Lorem Ipsum?</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

                        <h4>Where can I get some</h4>
                        <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                        <p>Combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>


                        <h4>Where does it come from</h4>
                        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
          </div>
        ) : ""}
        {tebs === '2' ? (
          <div className='overflow-auto container-fluid px-0 ttscrollbar'>
          </div>
        ) : ""
        }

{tebs === '3' ? (
          <div className='overflow-auto container-fluid px-0 ttscrollbar'>
          </div>
        ) : ""
        }
      </div>
    </div>

  )
}