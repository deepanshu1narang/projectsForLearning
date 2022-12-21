import React, {useReducer} from 'react';

function reducer(state, action) {
    let newState;
    switch (action.type) {
      case 'increase':
        newState = { counter: state.counter + 1 };
        break;
      case 'descrease':
        newState = { counter: state.counter - 1 };
        break;
      default:
        throw new Error();
    }
    return newState;
  }

export default function useRedducerNotes() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const action = {
        type: 'ActionType'
    };

  return (
    <>
        <button onClick={() => dispatch(action)}>
            Click me
        </button>
    </>
  );
}
