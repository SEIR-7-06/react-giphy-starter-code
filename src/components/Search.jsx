import React from 'react';

// API key = 8tb9DmbAnGgTzCwgOYVhRtIlcnELsQgx

class Search extends React.Component {
  state = {
    inputVal: 'iguana'
  }

  // Update inputVal to be whatever the user typed
  handleChange = (event) => {
    // event.target.value = the key the user pressed on the their keyboard
    this.setState({ inputVal: event.target.value });
  }

  handleFormSubmit = (event) => {
    // prevent default behavior of submitting a form
    // we don't want the page to refresh
    event.preventDefault();

    console.log('form was submitted!');

    this.props.fetchGifs();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <input 
            type="text" 
            value={this.state.inputVal} 
            onChange={this.handleChange}  
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    )
  }
}

export default Search;