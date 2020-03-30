import React, { Component } from 'react';
import Logo from "./logo";
import "./navbar.css"
import { Link, Events, animateScroll as scroll, scroller } from 'react-scroll'
import { IoIosMenu } from "react-icons/io";

 class NavBar extends Component {

    constructor(props){
        super(props);
        this.state = {
            isToggle : false
        }
        this.handleClick = this.handleClick.bind(this)
        this.scrollToTop = this.scrollToTop.bind(this);
    }
    
      componentDidMount() {
    
        Events.scrollEvent.register('begin', function () {
          console.log("begin", arguments);
        });
    
        Events.scrollEvent.register('end', function () {
          console.log("end", arguments);
        });
    
      }

      scrollToTop() {
        scroll.scrollToTop();
      }

      scrollTo() {
        scroller.scrollTo('scroll-to-element', {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart'
        })
      }

      scrollToWithContainer() {
    
        let goToContainer = new Promise((resolve, reject) => {
    
          Events.scrollEvent.register('end', () => {
            resolve();
            Events.scrollEvent.remove('end');
          });
    
          scroller.scrollTo('scroll-container', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
          });
    
        });
    
        goToContainer.then(() =>
          scroller.scrollTo('scroll-container-second-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart',
            containerId: 'scroll-container'
          }));
      }

      componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
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
                                        <li><Link activeClass="active" to="test1" spy={true} smooth={true} duration={6000} >About Me</Link></li>
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
