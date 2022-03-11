import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class PlayerForms extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playerForms: []
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/playerForms`)
      .then(res => this.setState({ playerForms: res.data.playerForms }))
      .catch(console.error)
  }

  render () {
    const playerForms = this.state.playerForms.map(playerForm => (
      <li key={playerForm.id}>
        <Link to={`/playerForms/${playerForm._id}`}>{playerForm.title}</Link>
      </li>
    ))

    return (
      <>
        <h4>PlayerForms</h4>
        <ul>
          {playerForms}
        </ul>
      </>
    )
  }
}

export default PlayerForms
