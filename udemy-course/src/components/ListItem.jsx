import React from 'react'

export default function ListItem(props) {
  return (
    <div>
        <h6>
            I am an added list item and my rank is {props.rank}
        </h6>
        <div className='responseCard'>
            <div>
                Name: <span className='response01'>{props.name}</span>
            </div>
            <div>
                Email: <span className="response01">{props.email}</span>
            </div>
            <div>
                Age : <span className="response01">{props.age}</span>
            </div>
            <div>
                Year : <span className="response01">{props.year}</span>
            </div>
        </div>
    </div>
  )
}
