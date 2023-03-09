import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BasicInfo from '../ProfileContent/BasicInfo/BasicInfo';
import DeleteAccount from '../ProfileContent/DeleteAccount/DeleteAccount';
import PasswordChange from '../ProfileContent/PasswordChange/PasswordChange';
import "./Tabs.css"

export default function Tabs() {
  const ordertabs = [
    {
      tabname: "Basic info",
      tabId: "1",
    },
    {
      tabname: "Password Change",
      tabId: "2",
    }
    ,
    {
      tabname: "Delete Account",
      tabId: "3",
    }
  ]
  const [tebs, settabs] = useState('1');
  return (
    <div className='tablistaddpro rounded-3  w-100' style={{ overflow: 'auto',backgroundColor:"transparent" }}>
      <ul className="nav nav-tabs w-100" id="ex2" role="tablist" style={{ marginBottom: '-20px' }}>
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

      <div className="tab-content w-100 mt-3" id="ex2-content">
        {tebs === '1' ? (
          <div className='overflow-auto container-fluid px-0 ttscrollbar'>
           <BasicInfo/>
          </div>
        ) : ""}
        {tebs === '2' ? (
          <div className='overflow-auto container-fluid px-0 ttscrollbar'>
           <PasswordChange/>
          </div>
        ) : ""
        }

{tebs === '3' ? (
          <div className='overflow-auto container-fluid px-0 ttscrollbar'>
           <DeleteAccount/>
          </div>
        ) : ""
        }
      </div>
    </div>

  )
}