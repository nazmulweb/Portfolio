import React, { Component } from 'react'
import { Title } from "./common"
import { FaSkype, FaPhone, FaEnvelope  } from "react-icons/fa"
import './contact.css'

export class Contact extends Component {
    render() {
        return (
          <React.Fragment>
              <div className="container mt-5 contact-area">
                  <div className="row">
                      <div className="col-sm-12">
                          <Title title="Contact" mtBottom = "40px"/>
                      </div>
                      <div className="col-sm-12">
                          <ul className="contact">
                              <li><span><FaSkype /></span> nazmulhasan598040_1</li>
                              <li> <span><FaEnvelope /></span> nazmulhasan598040@gmail.com</li>
                              <li> <span><FaPhone /></span> +88 01760372703</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </React.Fragment>  
        )
    }
}
