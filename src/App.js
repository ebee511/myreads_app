import React from 'react'
import { Route } from 'react-router-dom'
import SearchPage from './SearchPage'
import HomePage from './homePage'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  //Fetches books
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  //Method to update the state
  moveShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        {/*Route for main page*/}
        <Route exact path='/' render={() => (
          <HomePage
            books={this.state.books}
            moveShelf={this.moveShelf}
          />
        )}/>

        {/*Route for search page*/}
        <Route path='/search' render={({ history }) => (
          <SearchPage
            moveShelf={this.moveShelf}
            books={this.state.books}
          />
        )}/>
      </div>
    )
  }
}

export default BooksApp
