import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'

export default class News extends Component {
    static defaultProps = {
        country: "us",
        category: "general",
        pageSize:6
    }
    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize:PropTypes.number
    }

    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        // console.log('Mount');
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efa056db1c544ecda614e5741ac27766&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults })

    }
    handlerPrevious = async () => {
        console.log("Previous")
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efa056db1c544ecda614e5741ac27766&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    handlerNext = async () => {
        console.log("Next")
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {


        } else {

            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=efa056db1c544ecda614e5741ac27766&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            })
        }
    }
    render() {
        console.log('render');
        return (
            <div className="container my-3">
                <h1 className='text-center'>Study News - {this.props.category}</h1>

                <div className="row mt-4">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage} newUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between mt-3">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-primary" onClick={this.handlerPrevious}>&larr; Previous</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className="btn btn-primary" onClick={this.handlerNext}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
