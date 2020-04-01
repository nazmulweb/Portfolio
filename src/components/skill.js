import React, { Component } from 'react'
import { data }  from '../data'
import { Title } from './common'
import './skill.css'

export class Skill extends Component {
    constructor(props){
        super(props)
        this.state = {
            datas: [],
            sortSkillDatas: "Web"
        }
    }

    componentDidMount = () =>{
        this.setState({
            datas : data
        })
    }

    selectedSkill = (data) =>{
        this.setState({
            sortSkillDatas: data
        })
    }

    render() {
        const { datas, sortSkillDatas } = this.state
        if(data !== null){
            const skillDatas = datas[sortSkillDatas]
            return (
                <React.Fragment>
                <section className="skill-area mt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Title title="My Skills" mtBottom = "40px" />
                            </div>
                            <div className="col-sm-12 mb-4">
                                <ul className='skill-menu'>
                                    {
                                        Object.keys(datas).map( data => {
                                            return(
                                                <li 
                                                    key={data}
                                                    onClick={() => this.selectedSkill(data)}
                                                    className={ data === sortSkillDatas ? "active" : "" }
                                                >{data}</li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="skill">
                                    {
                                        skillDatas !== undefined ?
                                            skillDatas.map( skillData => 
                                                <div className="skill-card" key={skillData.name}>
                                                    <div className="skill-details">
                                                        <h5>{skillData.name}</h5>
                                                        <p>{skillData.percent}%</p>
                                                    </div>
                                                    <div style={{width: skillData.percent + "%"}} className="progress-bar"></div>
                                                </div>
                                            )
                                        : ""
                                    }
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
