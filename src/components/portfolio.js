import React, { Component } from 'react'
import { Title } from './common'
import { works }  from '../data'
import './portfolio.css'

export class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            portfolios: [],
            sortPortfolioData: []
        }
        this.selectedPortfolio = this.selectedPortfolio.bind(this)
    }

    componentDidMount () {
        this.setState({
            portfolios: Object.keys(works)
        })
        this.selectedPortfolio()
    }

    selectedPortfolio = (data) =>{
       this.setState({
        sortPortfolioData: data
       })
    }

    render() {
        // const { portfolios, sortPortfolioData } = this.state
        if( this.state.portfolios !== undefined){
            const sortDatas = works[this.state.sortPortfolioData]
            return (
                <React.Fragment>
                    <section className="about-area mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <Title title="Portfolio" mtBottom = "40px" />
                                </div>
                                <div className="col-sm-12">
                                    <ul>
                                        {
                                           this.state.portfolios.map( portfolio =>{
                                                return (
                                                        <li 
                                                            key={portfolio}
                                                            onClick={() => this.selectedPortfolio(portfolio)}
                                                        >
                                                            {portfolio}
                                                        </li>
                                                    )
                                            })
                                        }
                                    </ul>
                                </div>
                                {
                                    sortDatas !== undefined ?
                                        sortDatas.map( (data, key) =>{
                                            return(
                                                <div className="col-sm-12 col-md-6 col-lg-4" key={key}>
                                                    <div className="card portfolio-card mb-4">{data.name}</div>
                                                </div>
                                            )
                                        })
                                    : ""
                                }
                            </div>
                        </div>
                    </section>
                </React.Fragment>
            )
        } else{
            return "Loading....."
        }
    }
}
