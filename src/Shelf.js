import React, { Component } from 'react'
import Book from './book.js'

class Shelf extends Component {
	render () {
		return (
			<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.innerHTML}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
          {
          	this.props.books
          		.filter(book => book.shelf === this.props.shelfCategory)
          		.map(book => (
                <li key={ book.id }>
                 <Book
  									book = { book }
  									moveShelf={this.props.moveShelf}
  									currentShelf={this.props.shelfCategory}
                 />
                </li>
          		))
          }
          </ol>
        </div>
      </div>
		)
	}
}

export default Shelf;