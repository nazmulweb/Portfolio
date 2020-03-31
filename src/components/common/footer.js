import React, { Component } from 'react'
import { Social, Button, ScrollToTop } from './'
import './footer.css'

export class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="footer-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 text-center mb-5 mt-5">
                                <h1>Thank You</h1>
                                <Button title="Contact Me" link="mailto:nazmulhasan598040@gmail.com"/>
                                <Social />
                                <ScrollToTop />
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
