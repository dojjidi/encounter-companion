import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import PlayerForm from './PlayerForm'

class PlayerFormCreate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      playerForm: {
        name: '',
        initiative: '',
        hp: '',
        statusConditions: ''
      },
      createdPlayerFormId: null
    }
  }

  handleChange = event => {
    const updatedField = { [event.target.name]: event.target.value }

    const editedPlayerForm = Object.assign(this.state.playerForm, updatedField)

    this.setState({ playerForm: editedPlayerForm })
  }

  handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/playerForms`,
      method: 'POST',
      data: { playerForm: this.state.playerForm }
    })
      .then(res => this.setState({ createdPlayerFormId: res.data.playerForm._id }))
      .catch(console.error)
  }

  render () {
    const { handleChange, handleSubmit } = this
    const { createdPlayerFormId, playerForm } = this.state

    if (createdPlayerFormId) {
      return <Navigate to={`/playerForms/${createdPlayerFormId}`} />
    }

    return (
      <>
        <PlayerForm
          playerForm={playerForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          cancelPath="/"
        />
      </>
    )
  }
}

export default PlayerFormCreate
