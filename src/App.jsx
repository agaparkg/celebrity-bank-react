import React, { Component } from 'react'
import Pagination from "react-js-pagination";
import './App.css';
require("bootstrap/less/bootstrap.less")

class App extends Component {
  constructor() {
    super()
    this.state = {
      celebrities: [],
      activePage: 1,
      total_pages: 0,
      total_results: 0,
    }
  }
  
  componentDidMount(){
    const { activePage } = this.state;
    this.fetchJson(activePage)
  }

  handlePageChange = (pageNumber) => {
    this.fetchJson(pageNumber)
  }

  fetchJson = (activePage) => {
    const url = `https://api.themoviedb.org/3/person/popular?api_key=df8b08ecb436696fee41a00f8d87a540&language=en&page=${activePage}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      this.setState({celebrities: data.results, activePage: data.page})
    })
    .catch(err => console.log(err));
  }

  render(){
    const {celebrities, activePage} = this.state;
    return (
      <div className="App">
        <div className='wrapper'>
          <header><h1>Movie Celebrities</h1></header>
          <div className="pagination">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={20}
              totalItemsCount={10000}
              pageRangeDisplayed={10}
              onChange={this.handlePageChange.bind(this)}
            />
          </div>
          <main className='content'>
            <ul className='movies'>
              {
                celebrities.map(celebrity => {
                  const castedIn = celebrity.known_for.map(movie => movie.title)
                  return (
                    <li key={celebrity.id} className='movie'>
                      <img src={`http://image.tmdb.org/t/p/w185${celebrity.profile_path}`} alt="celebrity avatar"/>
                      <div className="celeb-name"><strong>{celebrity.name}</strong></div>
                      <div className="celeb-name">{castedIn.join(", ")}</div>
                    </li>
                  )
                })
              }
            </ul>
          </main>
        </div>
      </div>
    );
  }
}

export default App;
