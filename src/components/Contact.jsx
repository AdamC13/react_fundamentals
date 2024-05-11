import React, { Component } from 'react'

export class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
            name: this.props.name,
            linkedin: this.props.linkedin
        }
    }

  render() {
    return (
      <div>
        <h5>{this.state.name}: <a href={this.state.linkedin}>My LinkedIn</a></h5>
      </div>
    )
  }
}
Contact.defaultProps = {
    name: 'Ben Kenobi',
    linkedin: 'https://www.linkedin.com/in/ben-kenobi-419416284/'
}

export default Contact
