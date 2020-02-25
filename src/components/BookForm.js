import React, {Component} from "react"
import Select from "react-select"

class BookForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      title: "",
      author: "",
      rating: "",
      tag: ""
    }

    this.handleSubmit = props.handleSubmit.bind(this)
    this.handleCancel = props.handleCancel.bind(this)
  }

  onChangeTag(value){
    this.setState({tag: value})
  }

  onChangeRating(value){
    this.setState({rating: value})
  }

  render() {
    var tagOptions = [
      { value: 'read', label: 'Read' },
      { value: 'want to read', label: 'Want to read' },
      { value: 'not interested', label: 'Not interested' }
    ]
    var ratingOptions = [
      { value: '-', label: '-' },
      { value: '1 star', label: '1 star' },
      { value: '2 stars', label: '2 stars' },
      { value: '3 stars', label: '3 stars' },
      { value: '4 stars', label: '4 stars' },
      { value: '5 stars', label: '5 stars' },
    ]

    return (
      <div>
        <form id="book-form">
          <div class="form-group">
            <legend>What's the book's title?</legend>
            <input class="form-field" name="title" value={this.state.title} onChange={e=>this.setState({title:e.target.value})} />
          </div>
          <div class="form-group">
            <legend>Who's the author?</legend>
            <input class="form-field" name="author" value={this.state.author} onChange={e=>this.setState({author:e.target.value})} />
          </div>
          <div class="form-group">
            <legend>What's your rating?</legend>
            <Select class="form-field" name="rating" placeholder="Select your option" options={ratingOptions} value={this.state.rating} onChange={this.onChangeRating.bind(this)}/>
          </div>
          <div class="form-group">
            <legend>What is your current situation about this book?</legend>
            <Select class="form-field" name="tag" placeholder="Select your option" options={tagOptions} value={this.state.tag} onChange={this.onChangeTag.bind(this)}/>
          </div>
          <div class="form-group">
            <button class="form-button" form="book-form" type="submit" onClick={this.handleSubmit}>Save book in your list</button>
            <button class="form-button" onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    )
  }
}

export default BookForm