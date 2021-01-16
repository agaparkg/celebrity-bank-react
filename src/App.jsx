import React, { Component } from "react";
import { Spinner } from "reactstrap";
import CelebsPagination from "./components/CelebsPagination.jsx";
import CelebritiesComp from "./components/CelebritiesComp.jsx";
import dotenv from "dotenv";
dotenv.config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      celebrities: [],
      activePage: 1,
      isLoading: false,
      leftLimit: 0,
      total_pages: 0,
      total_results: 0,
      limit: 20,
      showModal: false,
      modalContentData: {},
    };
  }

  componentDidMount() {
    const { activePage } = this.state;
    this.setState({ isLoading: false });
    this.fetchJson(activePage);
  }

  handlePageChange = (pageNumber) => {
    const { celebrities } = this.state;
    const limit = pageNumber * celebrities.length;
    const leftLimit = (pageNumber - 1) * celebrities.length + 1;

    this.setState({
      isLoading: false,
      activePage: pageNumber,
      limit,
      leftLimit,
    });
    this.fetchJson(pageNumber);
  };

  fetchJson = (activePage) => {
    const url = `${process.env.REACT_APP_MOVIE_URL}&page=${activePage}`;
    setTimeout(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          this.setState({
            celebrities: data.results,
            activePage: data.page,
            isLoading: true,
            total_pages: data.total_pages,
          });
        })
        .catch((err) => console.log(err));
    }, 500);
  };

  handleOpenModal = (celebrity_id) => {
    const singleCelebrity = this.state.celebrities.find(
      (celebrity) => celebrity.id === celebrity_id
    );
    this.setState({ showModal: true, modalContentData: singleCelebrity });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const {
      celebrities,
      activePage,
      isLoading,
      leftLimit,
      limit,
      total_pages,
      showModal,
      modalContentData,
    } = this.state;
    const mainContent = !isLoading ? (
      <Spinner color="primary" />
    ) : (
      <CelebritiesComp
        handleCloseModal={this.handleCloseModal}
        handleOpenModal={this.handleOpenModal}
        celebrities={celebrities}
        showModal={showModal}
        modalContentData={modalContentData}
      />
    );
    console.log("modal content data =", modalContentData);
    return (
      <div className="App">
        <div className="wrapper">
          <header>
            <h1>Movie Celebrities</h1>
          </header>
          <div className="pagination-count">
            <div>
              <CelebsPagination
                total_pages={total_pages}
                handlePageChange={this.handlePageChange}
                activePage={activePage}
              />
            </div>
            <div className="page-results">
              Showing results {leftLimit} to {limit}
            </div>
          </div>
          <main className="content">{mainContent}</main>
        </div>
      </div>
    );
  }
}

export default App;
