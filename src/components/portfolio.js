import React, { Component } from 'react'
import { Title } from './common'
import { works }  from '../data'
import './portfolio.css'

export class Portfolio extends Component {
    constructor(props){
        super(props);
        this.state = {
            portfolios: [],
            sortPortfolioData: "Web"
        }
        this.selectedPortfolio = this.selectedPortfolio.bind(this)
    }

    componentDidMount () {
        this.setState({
            portfolios: Object.keys(works)
        })
    }

    selectedPortfolio = (data) =>{
       this.setState({
        sortPortfolioData: data
       })
    }

    render() {

        const { portfolios, sortPortfolioData} = this.state;

        if( portfolios !== undefined){
            const sortDatas = works[sortPortfolioData]
            return (
                <React.Fragment>
                    <section className="about-area mt-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <Title title="Portfolio" mtBottom = "40px" />
                                </div>
                                <div className="col-sm-12 mb-4">
                                    <ul className="portfolio-menu">
                                        {
                                           portfolios.map( portfolio =>{
                                                return (
                                                        <li 
                                                            key={portfolio}
                                                            onClick={() => this.selectedPortfolio(portfolio)}
                                                            className={ portfolio === sortPortfolioData ? "active" : "" }
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
                                                    <div className="card portfolio-card mb-4">
                                                        {
                                                        data.image ?
                                                            <a href={data.demo} target="_blank" className="mb-3">
                                                                <img className="card-img-top" src={data.image} alt={data.description} />
                                                            </a>
                                                        : ""
                                                        }
                                                        <a href={data.demo} target="_blank">{data.name}</a>
                                                        <p className="mt-3">{data.description}</p>
                                                        <ul>
                                                            { 
                                                                data.tools.map( (sub_data, key ) => {
                                                                    return (
                                                                            <li className="tools" key={`${key}_${sub_data}`}>{ sub_data }</li>
                                                                            )
                                                                        })
                                                            }
                                                        </ul>
                                                    </div>
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
