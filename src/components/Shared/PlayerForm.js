import React, { useState, useEffect } from 'react'
import axios from 'axios'
import apiUrl from '../../apiConfig'

const PlayerForm = ({ user }) => {
  const [playerForm, setPlayerForm] = useState({ name: '', initiative: '', hp: '', statusConditions: '' })
  const [playerFormId, setPlayerFormId] = useState('')
  useEffect(() => {
    if (!playerFormId === '') {
      axios({
        url: `${apiUrl}/stats/${playerFormId}`,
        method: 'GET'
      })
        .then(res => console.log(res.data))
        .catch(console.error)
    }
  }, [playerFormId])
  const handleSubmit = (e) => {
  // prevent default
    e.preventDefault()
    // make an axios call to the backend to create a new resource
    axios({
      url: `${apiUrl}/stats`,
      method: 'POST',
      data: { stats: playerForm },
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    })
      .then(res => setPlayerFormId(res.data.stats._id))
      // .then(console.log)
      .catch(console.error)
    // display resource to user once its create
    console.log(playerFormId, setPlayerFormId)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        placeholder="Name"
        value={playerForm.name}
        name="name"
        onChange={e => setPlayerForm({ ...playerForm, name: e.target.value })}
      />

      <label>Initiative</label>
      <input
        placeholder="Initiative"
        value={playerForm.initiative}
        name="initiative"
        onChange={e => setPlayerForm({ ...playerForm, initiative: e.target.value })}
      />

      <label>HP</label>
      <input
        placeholder="HP"
        value={playerForm.hp}
        name="hp"
        onChange={e => setPlayerForm({ ...playerForm, hp: e.target.value })}
      />

      <label>Status Conditions</label>
      <input
        placeholder="Status Condition"
        value={playerForm.statusConditions}
        name="statusConditions"
        onChange={e => setPlayerForm({ ...playerForm, statusConditions: e.target.value })}
      />

      <button type="submit">Submit</button>
    </form>
  )
}

export default PlayerForm

// import React from 'react'

// function handleSubmit (event) {
//   event.preventDefault()
// }

// class PlayerForm extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       name: null,
//       initiative: null,
//       hp: null,
//       statusConditions: null
//     }

//     this.handleInputChange = this.handleInputChange.bind(this)
//   }

//   handleInputChange (event) {
//     const target = event.target
//     const value = target.type === 'checkbox' ? target.checked : target.value
//     const name = target.name

//     this.setState({
//       [name]: value
//     })
//   }

//   render () {
//     return (
//       <form onSubmit={ handleSubmit }>
//         <label>
//           Name:
//           <input
//             name="name"
//             type="string"
//             value={this.state.name}
//             onChange={this.handleInputChange} />
//         </label>
//         <label>
//           Initiative:
//           <input
//             name="initiative"
//             type="number"
//             value={this.state.initiative}
//             onChange={this.handleInputChange} />
//         </label>
//         <label>
//           HP:
//           <input
//             name="hp"
//             type="number"
//             value={this.state.hp}
//             onChange={this.handleInputChange} />
//         </label>
//         <label>
//           Status Conditions:
//           <input
//             name="statusConditions"
//             type="string"
//             value={this.state.statusConditions}
//             onChange={this.handleInputChange} />
//         </label>
//         <input type='submit' name='submit-stats' />
//       </form>
//     )
//   }
// }

// export default PlayerForm
