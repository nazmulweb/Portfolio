import React, { Component } from 'react'
import Photo from '../assets/img/me.JPG'
import { Title } from './common'

export class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="about-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Title title="About Me" mtBottom = "40px" />
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="about-left">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam culpa vero, earum rerum mollitia quis deserunt, perferendis velit debitis quasi placeat, dolor sequi? Assumenda rem provident sit vel quasi saepe, eveniet corporis minus recusandae explicabo iusto similique exercitationem? Consequuntur hic quaerat corrupti, veritatis sit beatae quibusdam fugit consequatur veniam expedita!</p>
                                    <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, perspiciatis. Totam eligendi voluptatem fugiat modi quidem nobis assumenda obcaecati praesentium?</p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <img src={Photo} alt="profile"/>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}
