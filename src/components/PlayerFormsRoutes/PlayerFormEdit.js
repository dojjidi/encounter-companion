import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import PlayerForm from './PlayerForm'

class PlayerFormEdit extends Component {
  constructor (props) {
    super(props)
    this.id = props.id
    this.state = {
      playerForm: {
        name: '',
        initiative: '',
        hp: '',
        statusConditions: ''
      },
      updated: false
    }
  }

  componentDidMount () {
    axios(`${apiUrl}/PlayerForms/${this.id}`)
      .then(res => this.setState({ playerForm: res.data.playerForm }))
      .catch(console.error)
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedPlayerForm = Object.assign(this.state.playerForm, updatedField)

    this.setState({ playerForm: editedPlayerForm })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/playerForms/${this.id}`,
      method: 'PATCH',
      data: { playerForm: this.state.playerForm }
    })
      .then(() => this.setState({ updated: true }))
      .catch(console.error)
  }

  render () {
    const { playerForm, updated } = this.state
    const { handleChange, handleSubmit } = this

    if (updated) {
      return <Navigate to={`/playerForms/${this.id}`} />
    }

    return (
      <>
        <PlayerForm
          playerForm={playerForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath={`/playerForms/${this.id}`}
        />
      </>
    )
  }
}

export default PlayerFormEdit
