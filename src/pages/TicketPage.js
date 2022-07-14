import { useState, useEffect, useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const TicketPage = () => {
  const editMode = false
  return (
    <div className="ticket">
      <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
    </div>
  )
}

export default TicketPage
