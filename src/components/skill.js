import React, { Component } from 'react'
import { data }  from '../data'
import { Title } from './common'
import './skill.css'

export class Skill extends Component {
    state = {
        datas: []
    }

    componentDidMount = () =>{
        this.setState({
            datas : data
        })
    }

    render() {
        const { datas } = this.state
        if(data !== null){
            return (
                <React.Fragment>
                <section className="skill-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Title title="My Skills" mtBottom = "40px" />
                            </div>
                            <div className="col-sm-12">
                                <div className="skill">
                                    {datas.map(({name, percent}) => 
                                        <div className="skill-card" key={name}>
                                            <div className="skill-details">
                                                <h5>{name}</h5>
                                                <p>{percent}%</p>
                                            </div>
                                            <div style={{width: percent + "%"}} className="progress-bar"></div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
            )
        }
        else{
            return <div>Loadin...</div>
        }
    }
}
