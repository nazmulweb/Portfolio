import React, { Component } from 'react'
import { Title } from './common'
import { workinghistory }  from '../data'
import './working-history.css'

export class WorkingHistory extends Component {
    state = {
        workinghistories: []
    }

    componentDidMount () {
        this.setState({
            workinghistories: workinghistory
        })
    }

    render() {
        const { workinghistories } = this.state
        if(workinghistories !== undefined){
        return (
            <React.Fragment>
                <div className="working-history-area mt-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <Title title="Wroking History"  mtBottom = "40px"/>
                            </div>
                        </div>
                        <ul className="working-hitory">
                            <li className="line"></li>
                            {
                                workinghistories.map( (workinghistory, key) =>{
                                    return (
                                        <li key={key}>
                                            <div className="dots"></div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="working-history-mt duration">
                                                        <div>{ workinghistory.endDate }</div>
                                                        <div className="flot-right">|</div>
                                                        <div>{ workinghistory.startDate }</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-10">
                                                    <div className="card working-history-card working-history-mt">
                                                        <h5>{workinghistory.company} <span className="fz-14">{workinghistory.companyTitle}</span></h5>
                                                        <p className="mb-3">{workinghistory.role}</p>
                                                        <p className="fz-14">{workinghistory.responsibility}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        )
        }
        return "Loading..."
    }
}
