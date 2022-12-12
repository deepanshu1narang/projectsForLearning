import React from 'react'

export default function Contact(props) {
  return (
    <div className="contact">
        <h1>Contact {props.rank}</h1>
        <div>
            Name: {props.name}
        </div>
        <div>
            Email: {props.email}
        </div>
        <button onClick={props.deleteIt}>Delete</button>
    </div>
  )
}
