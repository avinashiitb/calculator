const defaultState = {
}

export default function reducer(state = defaultState, action) {
    switch(action.type) {
      case 'INPUT': {
        const { item } = action.payload;
        return {...state, item
        };
      }
      default:
        return state;
    }
  return state;
}
