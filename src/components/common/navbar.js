import React, { Component } from 'react';
import Logo from "./logo";
import "./navbar.css"
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { IoIosMenu } from "react-icons/io";

 class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggle : false
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () =>{
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
    
    render() {

        const { isToggle } = this.state;

        return (
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-nav">
                                <div className="logo">
                                    <Link to="/">
                                        <Logo />
                                    </Link>
                                </div>
                                <div className="mobile-menu" onClick = {this.handleClick}>
                                    <IoIosMenu />
                                </div>
                                <nav className="menu" style={{display: isToggle ? "block" : ''}}>
                                    <ul>
                                        <li><Link>About Me</Link></li>
                                        <li><Link>Skill</Link></li>
                                        <li><Link>Portfolio</Link></li>
                                        <li><Link>Contact Me</Link></li>
                                        <li><Link>Resume</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export { NavBar }
