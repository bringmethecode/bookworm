import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <p>Homepage</p>
        <Link to="/login">Login</Link>
      </div>
    )
  }
}
