import React, { Component } from 'react'
import Photo from '../assets/img/me.png'
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
                                    <Title title="About Me" mtBottom = "40px" />
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa vero, earum rerum mollitia quis deserunt, perferendis velit debitis quasi placeat, dolor sequi? Assumenda rem provident sit vel quasi saepe, eveniet corporis minus recusandae explicabo iusto similique exercitationem? Consequuntur hic quaerat corrupti, veritatis sit beatae quibusdam fugit consequatur veniam expedita!</p>
                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis. Totam eligendi voluptatem fugiat modi quidem nobis assumenda obcaecati praesentium?</p>
                                    <Button title="Get Resume"/>
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
