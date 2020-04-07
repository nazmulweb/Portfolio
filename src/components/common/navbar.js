import React, { Component } from 'react';
import Logo from "./logo";
import "./navbar.css"
import { Link, animateScroll as scroll } from 'react-scroll'
import { IoIosMenu } from "react-icons/io";
import { Button } from './'
 
 class NavBar extends Component {

  constructor(props){
      super(props);
      this.state = {
          isToggle : false,
          stickyNav: false
      }
      this.handleClick = this.handleClick.bind(this)
      this.stickyRef = React.createRef()
    }

    componentDidMount () {

      // get header class
      let stickyNavBg = this.stickyRef.current
      
      // sticky nav
      let prevScroll = window.pageYOffset
      window.addEventListener('scroll', ()=> {
        let currentScroll = window.pageYOffset
        if( prevScroll < currentScroll){
          this.setState({
            stickyNav: true
          })
        } else{
          this.setState({
            stickyNav: false
          })
        }

        // add calss to header
        if(currentScroll > 90 ){
          stickyNavBg.classList.add("stickyNav")
        } else{
          stickyNavBg.classList.remove("stickyNav")
        }

        prevScroll = currentScroll
      })
      
    }

    // mobile menu toggle
    handleClick = () =>{
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
    
    render() {

        const { isToggle, stickyNav } = this.state;
        return (
            <header className="header" style={{ top:  stickyNav ? "-90px" : "0"}} ref={this.stickyRef}>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="main-nav">
                                <div className="logo">
                                    <Link onClick={() => scroll.scrollToTop()} to="/">
                                        <Logo />
                                    </Link>
                                </div>
                                <div className="mobile-menu" onClick = {this.handleClick}>
                                    <IoIosMenu />
                                </div>
                                <nav className="menu" style={{display: isToggle ? "block" : ''}}>
                                    <ul>
                                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={600} >About Me</Link></li>
                                        <li><Link activeClass="active" to="skill" spy={true} smooth={true} duration={600} >Skill</Link></li>
                                        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={600} >Portfolio</Link></li>
                                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={600} >Contact Me</Link></li>
                                        <li><Button title="Resume" link="https://github.com/nazmulweb/Portfolio/raw/master/src/data/Resume_of_Nazmul_Hasan.pdf" target="_blank"></Button></li>
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
