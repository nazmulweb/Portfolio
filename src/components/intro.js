import React, { Component } from 'react';
import { Title, Social, ScrollDown } from './common/index'
import './intro.css'

 class Intro extends Component {
    render() {
        return (
            <div className="intro-area">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <div className="intro text-center d-flex align-items-center flex-column">
                                <div className="intro-me">
                                    <p>Hello, I am</p>
                                    <h1>Nazmul Hasan</h1>
                                    <h3>Front-end Developer</h3>
                                </div>
                                <Title title="Follow Me" />
                                <Social />
                            </div>
                        </div>
                    </div>
                </div>
                <ScrollDown />
            </div>
        )
    }
}

export { Intro }