import React from 'react'
import ListItem from './ListItem'

export default function List(props) {
  return (
    <div className='box'>
        <ListItem name={props.name} email={props.email} age={props.age} rank={props.rank} year={props.year} />
    </div>
  )
}
