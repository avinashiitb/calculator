const defaultState = {
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'OUTPUT': {
        const { result } = action.payload;
        return {...state, result
        };
      }
      default:
        return state;
    }
  return state;
}
