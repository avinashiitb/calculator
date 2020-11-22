export function inputAction(item) {
  return {
    type: 'INPUT',
    payload: {
      item
    }
  }
}

export function outputAction(result) {
  return {
    type: 'OUTPUT',
    // We can directly send data too, but in some case we have to send multiple data so make our data flow const we are using payload object
    payload: {
      result
    }
  }
}
