import React, { useReducer } from 'react';

const current = {
  name: 'Ahmed',
  age: 90
};

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload.name,
        age: action.payload.age
      };
    default:
      return state;
  }
}

function Assignment() {
  const [state, dispatch] = useReducer(reducer, current);

  const handleNameChange = (name, age) => {
    dispatch({ type: 'CHANGE_NAME', payload: { name, age } });
  };

  return (
    <div>
      <h2 style={{ fontSize: '16px', color: 'black' }}>Name: {state.name}   age: {state.age}</h2>
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '5px', borderRadius: '5px', border: 'none' }} onClick={() => handleNameChange('Mohamed', 30)}>Button 1: Mohamed</button>
      <button style={{ backgroundColor: 'grey', color: 'white', padding: '10px', margin: '5px', borderRadius: '5px', border: 'none' }} onClick={() => handleNameChange('Fartun', 25)}>Button 2: Fartun</button>
    </div>
  );
}

export default Assignment;
