import React, { Component } from 'react';

class Book extends Component {
  constructor(props) {
    super()

    this.state = {
      title: props.title,
      author: props.author,
      tag: props.tag,
      rating: props.rating
    }
  }
  
  render() {
    return (
      <div className="col-sm-3 mt-4">
        <div className="card">
          <div className="card-header">
            <b>{this.state.title}</b>
          </div>                  
          <div className="card-body">
            <b>Author:</b> {this.state.author}
            <br/>
            <b>Rating:</b> {this.state.rating}
          </div>
          <div className="card-footer">
            <p>{this.state.tag}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Book