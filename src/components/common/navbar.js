import React, { Component } from 'react';
import Logo from "./logo";
import "./navbar.css"
import { Link } from 'react-scroll'
import { IoIosMenu } from "react-icons/io";

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
      let prevScroll = window.pageYOffset
      let stickyNavBg = this.stickyRef.current
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

        if(currentScroll > 80 ){
          stickyNavBg.classList.add("stickyNav")
        } else{
          stickyNavBg.classList.remove("stickyNav")
        }

        prevScroll = currentScroll
      })
      
    }

    handleClick = () =>{
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
    
    render() {

        const { isToggle, stickyNav } = this.state;
        return (
            <header className="header" style={{ top:  stickyNav ? "-70px" : "0"}} ref={this.stickyRef}>
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
                                        <li><Link activeClass="active" to="about" spy={true} smooth={true} duration={600} >About Me</Link></li>
                                        <li><Link activeClass="active" to="skill" spy={true} smooth={true} duration={600} >Skill</Link></li>
                                        <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} duration={600} >Portfolio</Link></li>
                                        <li><Link activeClass="active" to="contact" spy={true} smooth={true} duration={600} >Contact Me</Link></li>
                                        <li><Link >Resume</Link></li>
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
