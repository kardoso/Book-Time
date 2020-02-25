import React, { Component } from 'react'
import Book from './components/Book'
import BookForm from './components/BookForm'

class App extends Component {
  constructor() {
    super()

    this.state = {
      inputNewBook: false
    }
  }

  handleNewBook() {
    this.setState({
      inputNewBook: true
    })
  }

  handleClearList() {
    localStorage.removeItem('books')
    window.location.reload(false)
  }

  handleCancel = () => {
    this.setState({
      inputNewBook: false
    })
  }

  handleSubmit = (event) =>{
    event.preventDefault()
    const data = new FormData(document.getElementById("book-form"))
    var books = JSON.parse(localStorage.getItem('books'))
    if(data.get("title") === ""){
      alert("Fill the title field")
      return false
    }
    if(data.get("author") === ""){
      alert("Fill the author field")
      return false
    }
    if(data.get("tag") === ""){
      alert("Fill your current situation")
      return false
    }
    if (books != null){
      books.push({
        "title" : data.get("title"),
        "author" : data.get("author"),
        "tag" : data.get("tag"),
        "rating" : data.get("rating")
      })
    }
    else{
      books = [{
        "title" : data.get("title"),
        "author" : data.get("author"),
        "tag" : data.get("tag"),
        "rating" : data.get("rating")
      }]
    }

    localStorage.setItem("books", JSON.stringify(books))
    this.setState({
      inputNewBook: false
    })
  }

  render() {
    
  return (
    <div className="App">
      {
        this.state.inputNewBook ?
        (
          <div id="main-container">
            <BookForm handleSubmit={this.handleSubmit} handleCancel={this.handleCancel}/>
          </div>
        )
        :
        (
          <div id="main-container">
            <p><button onClick={() => this.handleNewBook()}>Add a new book to your list</button></p>
            {
              localStorage.getItem('books') ?
                <p><button onClick={() => this.handleClearList()}>Clear list</button></p>
              :
                <div></div>
            }
            {ShowBooks()}
          </div>
        )
      }
    </div>
  )
  }
}


function ShowBooks(){
  var savedBooks = JSON.parse(localStorage.getItem('books'))
  if(savedBooks){
    return(
      <div className="App">
        <div className="container mt-10">
          <div className="row">
          {
            Array.from(savedBooks).map((book,index)=>(
              <Book key={index} title={book.title} author={book.author} tag={book.tag} rating={book.rating}/>
            ))
          }
          </div>
          </div>
      </div>
    )
  }
  else{
    return(
      <div>
        <p>You haven't added any books yet!</p>
      </div>
    )
  }
}

export default App
