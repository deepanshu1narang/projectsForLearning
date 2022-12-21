import React from 'react'
import UserContext from '../../Store/user-auth-context'

export default function User01() {
  return (
    <UserContext.Consumer>
        {value => {
            return(
                <React.Fragment>
                    <h1>{value}</h1>
                    <p>User01component using UserContext.</p>
                </React.Fragment>
            );
        }}
    </UserContext.Consumer>
  )
}
