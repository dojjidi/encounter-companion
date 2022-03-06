import React from 'react'

function handleSubmit (event) {
  event.preventDefault()
}

class PlayerForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      initiative: null,
      hp: null
    }

    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange (event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  render () {
    return (
      <form onSubmit={ handleSubmit }>
        <label>
          Initiative:
          <input
            name="Initiative"
            type="number"
            value={this.state.initiative}
            onChange={this.handleInputChange} />
        </label>
        <label>
          HP:
          <input
            name="HP"
            type="number"
            value={this.state.hp}
            onChange={this.handleInputChange} />
        </label>
        <label>
          Status Conditions:
          <input
            name="Status Conditions"
            type="string"
            value={this.state.hp}
            onChange={this.handleInputChange} />
        </label>
        <input type='submit' name='submit-stats' />
      </form>
    )
  }
}

export default PlayerForm
