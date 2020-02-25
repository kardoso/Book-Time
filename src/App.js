import React, { Component } from 'react';
import './App.css';
import Book from './components/Book'

class App extends Component {
  constructor() {
    super()

    this.state = {

    }
  }

  render() {
    
  return (
    <div className="App">
      {
        ShowBooks()
      }
    </div>
  );
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

export default App;
