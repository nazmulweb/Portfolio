import React, { Component } from 'react'
import Photo from '../assets/img/Myphoto.png'
import { Title, Button } from './common'
import './about.css'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about-area mt-5">
                    <div className="container">
                        <div className="row d-flex align-items-center">
                            <div className="col-sm-12 col-md-12 order-md-2 order-1 col-lg-6">
                                <div className="about-left">
                                    <Title title="About Me" mtBottom = "40px" textAlign="left"/>
                                    <p>My name is Nazmul Hasan. I am a Web developer. I have been working at Saros IT for 1+ years as a Web developer and also I have 5+ years of professional graphic design skills. My core skill is based on HTML, CSS, Javascript and PHP. I have a serious passion for building mobile responsive and cross-browser supported modern web applications and web design.</p>
                                    <Button title="Get Resume" link="https://github.com/nazmulweb/Portfolio/raw/master/src/data/Nazmul's_CV.pdf" target="_blank"/>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-12 order-md-1 order-lg-2 col-lg-6">
                                <img src={Photo} alt="profile" className="profile-photo"/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
