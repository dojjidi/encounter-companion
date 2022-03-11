import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'

class PlayerForm extends Component {
  constructor (props) {
    super(props)
    this.id = props.id
    this.state = {
      playerForm: null,
      deleted: false
    }
  }

  componentDidMount () {
    console.log(this.props)
    axios(`${apiUrl}/playerForms/${this.id}`)
      .then(res => this.setState({ playerForm: res.data.playerForm }))
      .catch(console.error)
  }

  destroy = () => {
    axios({
      url: `${apiUrl}/playerForms/${this.id}`,
      method: 'DELETE'
    })
      .then(() => this.setState({ deleted: true }))
      .catch(console.error)
  }

  render () {
    const { playerForm, deleted } = this.state

    if (!playerForm) {
      return <p>Loading...</p>
    }

    if (deleted) {
      return <Navigate to='/' state={ { msg: 'PlayerForm successfully deleted!' } } />
    }

    return (
      <>
        <h4>{playerForm.name}</h4>
        <p>Initiative: {playerForm.initiative}</p>
        <p>HP: {playerForm.hp}</p>
        <p>Status Conditions: {playerForm.statusConditions}</p>
        <button onClick={this.destroy}>Delete</button>
        <Link to={`/playerForms/${this.id}/edit`}>
          <button>Edit</button>
        </Link>
        <Link to="/PlayerForms">Back to all forms</Link>
      </>
    )
  }
}

export default PlayerForm
