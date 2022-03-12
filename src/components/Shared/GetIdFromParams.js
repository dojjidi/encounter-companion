import React from 'react'
import { useParams } from 'react-router-dom'

const GetIdFromParams = ({ Component }) => {
  const { id } = useParams()

  return <Component id={id} />
}

export default GetIdFromParams
